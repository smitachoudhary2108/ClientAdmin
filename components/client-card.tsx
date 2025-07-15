"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface Client {
  _id: string
  name: string
  description: string
  designation: string
  image: string
  createdAt: string
}

interface ClientCardProps {
  client: Client
  index: number
}

export default function ClientCard({ client, index }: ClientCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`group transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-in slide-in-from-bottom-4 bg-white/80 backdrop-blur-sm`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <Image
              src={client.image || "/placeholder.svg?height=60&width=60"}
              alt={client.name}
              width={60}
              height={60}
              className={`rounded-full object-cover transition-transform duration-300 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
            <div
              className={`absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 ${
                isHovered ? "scale-110 rotate-12" : "scale-100 rotate-0"
              }`}
            >
              <Quote className="w-3 h-3 text-white" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{client.name}</h3>
            <p className="text-sm text-blue-600 font-medium">{client.designation}</p>
          </div>
        </div>

        <p className="text-gray-600 italic leading-relaxed">"{client.description}"</p>
      </CardContent>
    </Card>
  )
}
