import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Contact from "@/models/Contact"

export async function GET() {
  try {
    await dbConnect()
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean()
    return NextResponse.json(contacts)
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect()
    const body = await request.json()
    const { fullName, email, mobile, city } = body

    if (!fullName || !email || !mobile || !city) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const contact = new Contact({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      mobile: mobile.trim(),
      city: city.trim(),
    })

    const savedContact = await contact.save()
    return NextResponse.json(savedContact, { status: 201 })
  } catch (error: any) {
    console.error("Error creating contact:", error)

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err: any) => err.message)
      return NextResponse.json({ error: errors.join(", ") }, { status: 400 })
    }

    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}
