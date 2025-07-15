 "use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from "lucide-react"
import FormInput from "@/components/ui/form-input"
import { useToast } from "@/hooks/use-toast"


const contactImages = {
  email:  "https://randomuser.me/api/portraits/women/68.jpg",
  phone:  "https://randomuser.me/api/portraits/men/58.jpg",
  office: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=120&h=120&q=80",
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setShowSuccessDialog(true)
        setFormData({ fullName: "", email: "", mobile: "", city: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* SVG Wavy Divider (Top) */}
      <div className="relative -mb-2">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-[44px] md:h-[60px]">
          <path fill="url(#waveGradient)"
            d="M0 0h1440v34.28c-118.47 17.25-273.57 17.25-518.27 15.74C677.4 47.1 555.6 38.48 393.41 27.94 209.74 15.85 86.33 11.14 0 34.28z"/>
          <defs>
            <linearGradient id="waveGradient" x1="0" x2="1440" y1="0" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c7d2fe"/>
              <stop offset="1" stopColor="#f3e8ff"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <section
        id="contact"
        className="pb-20 pt-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
      >
        {/* Animated Background Elements + Glass layers */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          {/* Soft Animated Bokeh "bubbles" with blur */}
          <div className="absolute top-36 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-40 blur-3xl animate-blob" />
          <div className="absolute top-80 right-20 w-60 h-60 bg-purple-200 rounded-full opacity-40 blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-16 left-32 w-60 h-60 bg-pink-200 rounded-full opacity-40 blur-3xl animate-blob animation-delay-4000" />
          {/* Floating sparkles for a dynamic look */}
          <div className="absolute w-2 h-2 bg-yellow-300 rounded-full shadow-xl opacity-60 animate-star top-28 left-1/3"/>
          <div className="absolute w-3 h-3 bg-blue-300 rounded-full shadow-xl opacity-50 animate-star animation-delay-1000 top-56 right-60"/>
          <div className="absolute w-2 h-2 bg-purple-300 rounded-full shadow-xl opacity-50 animate-star animation-delay-2000 bottom-40 left-1/2"/>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 animate-pulse-slow backdrop-blur-lg shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight drop-shadow-xl">
              Connect. Create. Celebrate.
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed backdrop-blur-xl rounded-xl px-3 py-2 bg-white/25 shadow-sm">
              Let’s make your vision real.<br/>Reach out, we’d love to build with you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Blurred Glass Panel for Contact Info */}
            <div className="relative rounded-3xl p-8 shadow-2xl bg-white/30 backdrop-blur-2xl border border-white/40 z-10">
              <div className="absolute inset-0 rounded-3xl bg-white/30 backdrop-blur-[6px] -z-10" />
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-[hsl(var(--primary))] drop-shadow mb-3">How to reach us?</h3>
                <div className="grid gap-8">
                  {/* Email */}
                  <div className="flex items-center gap-4 group">
                    <div className="relative w-16 h-16">
                      <img
                        src={contactImages.email}
                        alt="Contact (Email)"
                        className="w-16 h-16 rounded-full shadow-md border-4 border-blue-300 object-cover group-hover:scale-105 transition"
                      />
                      <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center shadow-lg border-2 border-white">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="uppercase tracking-wide font-bold text-blue-600 text-xs">Email</span>
                      <div className="font-semibold">hello@techcorp.com</div>
                      <div className="text-sm text-blue-700/80">Replies within 24 hrs</div>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center gap-4 group">
                    <div className="relative w-16 h-16">
                      <img
                        src={contactImages.phone}
                        alt="Contact (Phone)"
                        className="w-16 h-16 rounded-full shadow-md border-4 border-green-300 object-cover group-hover:scale-105 transition"
                      />
                      <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shadow-lg border-2 border-white">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="uppercase tracking-wide font-bold text-green-600 text-xs">Phone</span>
                      <div className="font-semibold">+1 (555) 123-4567</div>
                      <div className="text-sm text-green-700/80">Mon-Fri, 9AM-6PM</div>
                    </div>
                  </div>
                  {/* Office */}
                  <div className="flex items-center gap-4 group">
                    <div className="relative w-16 h-16">
                      <img
                        src={contactImages.office}
                        alt="Office Location"
                        className="w-16 h-16 rounded-full shadow-md border-4 border-purple-300 object-cover group-hover:scale-105 transition"
                      />
                      <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center shadow-lg border-2 border-white">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="uppercase tracking-wide font-bold text-purple-600 text-xs">Office</span>
                      <div className="font-semibold">123 Tech Street</div>
                      <div className="text-sm text-purple-700/80">Digital City, DC 12345</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Glassmorphic Contact Form */}
            <Card className="shadow-2xl border-0 bg-white/40 backdrop-blur-2xl rounded-3xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Send a Message
                </CardTitle>
                <p className="text-gray-700/80">Fill out the form below and we’ll reach out soon!</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FormInput
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                  <FormInput
                    label="Mobile Number"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter your mobile number"
                    required
                  />
                  <FormInput
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending Message...
                      </div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* SVG Wavy Divider (Bottom) */}
      <div className="relative -mt-2">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-[44px] md:h-[60px] rotate-180">
          <path fill="url(#waveGradient2)"
            d="M0 0h1440v34.28c-118.47 17.25-273.57 17.25-518.27 15.74C677.4 47.1 555.6 38.48 393.41 27.94 209.74 15.85 86.33 11.14 0 34.28z"/>
          <defs>
            <linearGradient id="waveGradient2" x1="0" x2="1440" y1="0" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c7d2fe"/>
              <stop offset="1" stopColor="#f3e8ff"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader>
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-600">
              Thank you for reaching out! We've received your message and will get back to you within 24 hours.
            </p>
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
            >
              Continue Exploring
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
