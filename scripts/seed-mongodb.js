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

// Sample data
const sampleProjects = [
  {
    name: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
  },
  {
    name: "Mobile Banking App",
    description:
      "Secure and user-friendly mobile banking application with biometric authentication and real-time transaction monitoring.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
  },
  {
    name: "Healthcare Management System",
    description:
      "Comprehensive healthcare management platform for hospitals and clinics with patient records and appointment scheduling.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
  },
  {
    name: "Real Estate Portal",
    description:
      "Advanced real estate platform with property listings, virtual tours, and mortgage calculator integration.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
  },
  {
    name: "Learning Management System",
    description:
      "Interactive online learning platform with course management, progress tracking, and certification features.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
  },
  {
    name: "Restaurant Management",
    description:
      "Complete restaurant management solution with POS system, inventory tracking, and customer loyalty programs.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
  },
]

const sampleClients = [
  {
    name: "Sarah Johnson",
    description:
      "Working with TechCorp was an absolute pleasure. They delivered our project on time and exceeded our expectations with their attention to detail and innovative solutions.",
    designation: "CEO, InnovateTech",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "Michael Chen",
    description:
      "The team at TechCorp transformed our outdated system into a modern, efficient platform. Their expertise in web development is truly remarkable.",
    designation: "CTO, DataFlow Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    description:
      "TechCorp delivered a stunning e-commerce platform that increased our online sales by 300%. Their support throughout the project was exceptional.",
    designation: "Founder, StyleHub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "David Thompson",
    description:
      "Professional, reliable, and innovative. TechCorp helped us digitize our entire business process, making us more efficient and competitive.",
    designation: "Operations Manager, LogiCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "Lisa Wang",
    description:
      "The mobile app developed by TechCorp has revolutionized how we interact with our customers. The user experience is fantastic and the performance is flawless.",
    designation: "Product Manager, FinanceFirst",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
  },
  {
    name: "James Wilson",
    description:
      "TechCorp understood our vision perfectly and brought it to life with cutting-edge technology. Their post-launch support has been outstanding.",
    designation: "Director, HealthPlus",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
  },
]

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
