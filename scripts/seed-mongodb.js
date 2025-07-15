// This script seeds the MongoDB database with sample data
// Run this script after setting up your MongoDB connection

const mongoose = require("mongoose")

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://smita:6Ik3X4Ml8bPiqLGp@cluster0.zibsj.mongodb.net/ClientAdminRelation"
 

// Schemas
const ProjectSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    image: String,
  },
  { timestamps: true },
)

const ClientSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    designation: String,
    image: String,
  },
  { timestamps: true },
)

const Project = mongoose.model("Project", ProjectSchema)
const Client = mongoose.model("Client", ClientSchema)

 

 
async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log("Connected to MongoDB")

    // Clear existing data
    await Project.deleteMany({})
    await Client.deleteMany({})
    console.log("Cleared existing data")

    // Insert sample projects
    await Project.insertMany(sampleProjects)
    console.log("Inserted sample projects")

    // Insert sample clients
    await Client.insertMany(sampleClients)
    console.log("Inserted sample clients")

    console.log("Database seeded successfully!")
    process.exit(0)
  } catch (error) {
    console.error("Error seeding database:", error)
    process.exit(1)
  }
}

seedDatabase()
