import mongoose from "mongoose"

const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Client name is required"],
      trim: true,
      maxlength: [100, "Client name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Client description is required"],
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    designation: {
      type: String,
      required: [true, "Client designation is required"],
      trim: true,
      maxlength: [100, "Designation cannot exceed 100 characters"],
    },
    image: {
      type: String,
      required: [true, "Client image is required"],
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Client || mongoose.model("Client", ClientSchema)
