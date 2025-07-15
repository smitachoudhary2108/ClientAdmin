import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechCorp - Building Digital Excellence",
  description:
    "We create stunning web experiences that drive results and inspire users. Transform your digital presence with our innovative solutions.",
  keywords: "web development, digital solutions, tech company, web design, mobile apps",
  authors: [{ name: "TechCorp" }],
  creator: "TechCorp",
  publisher: "TechCorp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techcorp.com",
    title: "TechCorp - Building Digital Excellence",
    description: "We create stunning web experiences that drive results and inspire users.",
    siteName: "TechCorp",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechCorp - Building Digital Excellence",
    description: "We create stunning web experiences that drive results and inspire users.",
    creator: "@techcorp",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%234F46E5;stop-opacity:1' /><stop offset='100%' style='stop-color:%237C3AED;stop-opacity:1' /></linearGradient></defs><rect width='100' height='100' rx='20' fill='url(%23grad)'/><rect x='20' y='20' width='60' height='60' rx='10' fill='white'/><rect x='30' y='30' width='40' height='40' rx='5' fill='url(%23grad)'/></svg>"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
