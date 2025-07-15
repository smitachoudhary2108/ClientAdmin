import mongoose from "mongoose"

const NewsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Newsletter || mongoose.model("Newsletter", NewsletterSchema)
