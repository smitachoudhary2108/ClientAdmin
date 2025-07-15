"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute top-30 left-40 w-72 h-72 bg-pink-200  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-5 right-40 w-72 h-72 bg-blue-200  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-5 right-40 w-72 h-72 bg-pink-200  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
       
        <div className="absolute bottom-20 -left-8 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              Building Digital
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We create stunning web experiences that drive results and inspire users. Let's build something amazing
              together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
 
            </div>
          </div>

          {/* Floating Elements */}
         {/* Ring Effects with Blur and Glow */}
        <div className="absolute top-[5%] left-[15%] w-12 h-12 rounded-full border-2 border-sky-400 opacity-40 blur-sm animate-ping shadow-lg animation-delay-[1800ms]" />
<div className="absolute top-[45%] right-[20%] w-16 h-16 rounded-full border-2 border-orange-400 opacity-50 blur animate-bounce shadow-xl animation-delay-[2000ms]" />
<div className="absolute bottom-[10%] left-[10%] w-10 h-10 rounded-full border-2 border-teal-400 opacity-60 blur-sm animate-ping shadow-lg animation-delay-[2200ms]" />
<div className="absolute top-[60%] left-[40%] w-14 h-14 rounded-full border-2 border-fuchsia-500 opacity-50 blur animate-bounce shadow-md animation-delay-[2400ms]" />
<div className="absolute top-[25%] right-[5%] w-9 h-9 rounded-full border-2 border-lime-400 opacity-30 blur-sm animate-ping shadow-lg animation-delay-[2600ms]" />
<div className="absolute bottom-[30%] right-[40%] w-11 h-11 rounded-full border-2 border-emerald-400 opacity-70 blur animate-bounce shadow-xl animation-delay-[2800ms]" />
<div className="absolute top-[80%] left-[50%] w-8 h-8 rounded-full border-2 border-violet-400 opacity-60 blur-sm animate-ping shadow-md animation-delay-[3000ms]" />
<div className="absolute bottom-[5%] right-[10%] w-13 h-13 rounded-full border-2 border-rose-500 opacity-40 blur-sm animate-bounce shadow-lg animation-delay-[3200ms]" />
<div className="absolute top-[15%] left-[70%] w-12 h-12 rounded-full border-2 border-yellow-300 opacity-50 blur animate-ping shadow-xl animation-delay-[3400ms]" />
<div className="absolute bottom-[20%] right-[15%] w-10 h-10 rounded-full border-2 border-blue-300 opacity-60 blur-sm animate-bounce shadow-lg animation-delay-[3600ms]" />
   
   {/* Ring Effects with Blur and Glow */}
<div className="absolute top-1/4 left-1/4 w-10 h-10 rounded-full border-2 border-blue-400 opacity-70 blur-sm animate-bounce shadow-lg backdrop-blur-sm" />
<div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full border-2 border-purple-400 opacity-60 blur-sm animate-bounce shadow-md backdrop-blur-sm animation-delay-1000" />
<div className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full border-2 border-pink-400 opacity-50 blur animate-bounce shadow-xl backdrop-blur-sm animation-delay-2000" />

<div className="absolute top-1/2 left-1/5 w-14 h-14 rounded-full border-2 border-green-400 opacity-40 blur-sm animate-ping shadow-lg animation-delay-[400ms]" />
<div className="absolute bottom-1/5 right-1/6 w-8 h-8 rounded-full border-2 border-yellow-300 opacity-70 blur-sm animate-bounce shadow-md animation-delay-[600ms]" />
<div className="absolute top-2/3 left-2/3 w-10 h-10 rounded-full border-2 border-red-400 opacity-60 blur-sm animate-bounce shadow-lg animation-delay-[800ms]" />
<div className="absolute top-[10%] right-[10%] w-11 h-11 rounded-full border-2 border-indigo-500 opacity-50 blur animate-ping shadow-md animation-delay-[1000ms]" />
<div className="absolute bottom-[15%] left-[20%] w-9 h-9 rounded-full border-2 border-rose-400 opacity-60 blur-sm animate-bounce shadow-lg animation-delay-[1200ms]" />
<div className="absolute top-[35%] left-[70%] w-7 h-7 rounded-full border-2 border-amber-500 opacity-40 blur-sm animate-bounce shadow-md animation-delay-[1400ms]" />
<div className="absolute bottom-[40%] right-[30%] w-12 h-12 rounded-full border-2 border-cyan-400 opacity-50 blur-sm animate-bounce shadow-xl animation-delay-[1600ms]" />
 

 <div className="absolute top-[10%] left-[15%] w-14 h-14 rounded-full border-2 border-blue-400 opacity-50 blur-sm animate-ping shadow-lg" />
  <div className="absolute top-[20%] right-[20%] w-12 h-12 rounded-full border-2 border-purple-400 opacity-60 blur-sm animate-bounce shadow-md animation-delay-[600ms]" />
  <div className="absolute top-[30%] left-[25%] w-10 h-10 rounded-full border-2 border-pink-400 opacity-40 blur-sm animate-ping shadow-xl animation-delay-[800ms]" />
  <div className="absolute top-[15%] right-[10%] w-16 h-16 rounded-full border-2 border-green-400 opacity-50 blur animate-bounce shadow-md animation-delay-[1000ms]" />
  <div className="absolute top-[5%] left-[40%] w-12 h-12 rounded-full border-2 border-yellow-300 opacity-30 blur-sm animate-ping shadow-md animation-delay-[1200ms]" />
  <div className="absolute top-[35%] right-[30%] w-14 h-14 rounded-full border-2 border-cyan-400 opacity-40 blur-sm animate-bounce shadow-lg animation-delay-[1400ms]" />
  <div className="absolute top-[25%] left-[60%] w-11 h-11 rounded-full border-2 border-fuchsia-500 opacity-60 blur animate-ping shadow-md animation-delay-[1600ms]" />
  <div className="absolute top-[8%] right-[5%] w-10 h-10 rounded-full border-2 border-rose-400 opacity-50 blur-sm animate-bounce shadow-lg animation-delay-[1800ms]" />

        </div>
      </div>
    </section>
  )
}
