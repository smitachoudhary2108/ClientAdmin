import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Newsletter from "@/models/Newsletter"

export async function GET() {
  try {
    await dbConnect()
    const subscriptions = await Newsletter.find({}).sort({ createdAt: -1 }).lean()
    return NextResponse.json(subscriptions)
  } catch (error) {
    console.error("Error fetching newsletter subscriptions:", error)
    return NextResponse.json({ error: "Failed to fetch subscriptions" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect()
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const subscription = new Newsletter({
      email: email.trim().toLowerCase(),
    })

    const savedSubscription = await subscription.save()
    return NextResponse.json(savedSubscription, { status: 201 })
  } catch (error: any) {
    console.error("Error creating newsletter subscription:", error)

    if (error.code === 11000) {
      return NextResponse.json({ error: "Email is already subscribed" }, { status: 400 })
    }

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err: any) => err.message)
      return NextResponse.json({ error: errors.join(", ") }, { status: 400 })
    }

    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
