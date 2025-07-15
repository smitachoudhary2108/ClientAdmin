import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Client from "@/models/Client"

export async function GET() {
  try {
    await dbConnect()
    const clients = await Client.find({}).sort({ createdAt: -1 }).lean()
    return NextResponse.json(clients)
  } catch (error) {
    console.error("Error fetching clients:", error)
    return NextResponse.json({ error: "Failed to fetch clients" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect()
    const body = await request.json()
    const { name, description, designation, image } = body

    if (!name || !description || !designation || !image) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const client = new Client({
      name: name.trim(),
      description: description.trim(),
      designation: designation.trim(),
      image: image.trim(),
    })

    const savedClient = await client.save()
    return NextResponse.json(savedClient, { status: 201 })
  } catch (error: any) {
    console.error("Error creating client:", error)

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err: any) => err.message)
      return NextResponse.json({ error: errors.join(", ") }, { status: 400 })
    }

    return NextResponse.json({ error: "Failed to create client" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    await dbConnect()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Client ID is required" }, { status: 400 })
    }

    const deletedClient = await Client.findByIdAndDelete(id)

    if (!deletedClient) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Client deleted successfully" })
  } catch (error) {
    console.error("Error deleting client:", error)
    return NextResponse.json({ error: "Failed to delete client" }, { status: 500 })
  }
}
