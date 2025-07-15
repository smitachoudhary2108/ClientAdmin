"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface Project {
  _id: string
  name: string
  description: string
  image: string
  createdAt: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-in slide-in-from-bottom-4`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={project.image || "/placeholder.svg?height=250&width=400"}
            alt={project.name}
            width={400}
            height={250}
            className={`w-full h-64 object-cover transition-transform duration-500 rounded-lg ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
            {project.name}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="p-0 h-auto text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-transform"
          >
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
