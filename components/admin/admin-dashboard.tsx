"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, FolderOpen, Mail, MessageSquare, TrendingUp, Calendar, Loader2, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

interface DashboardStats {
  totalProjects: number
  totalClients: number
  totalContacts: number
  totalSubscribers: number
  recentProjects: number
  recentClients: number
  recentContacts: number
  recentSubscribers: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    totalClients: 0,
    totalContacts: 0,
    totalSubscribers: 0,
    recentProjects: 0,
    recentClients: 0,
    recentContacts: 0,
    recentSubscribers: 0,
  })
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchDashboardStats()
  }, [])

  const fetchDashboardStats = async () => {
    try {
      setLoading(true)

      const [projectsRes, clientsRes, contactsRes, newsletterRes] = await Promise.all([
        fetch("/api/projects", { cache: "no-store" }),
        fetch("/api/clients", { cache: "no-store" }),
        fetch("/api/contact", { cache: "no-store" }),
        fetch("/api/newsletter", { cache: "no-store" }),
      ])

      if (!projectsRes.ok || !clientsRes.ok || !contactsRes.ok || !newsletterRes.ok) {
        throw new Error("Failed to fetch dashboard data")
      }

      const [projects, clients, contacts, subscribers] = await Promise.all([
        projectsRes.json(),
        clientsRes.json(),
        contactsRes.json(),
        newsletterRes.json(),
      ])

      const weekAgo = new Date()
      weekAgo.setDate(weekAgo.getDate() - 7)

      const recentProjects = projects.filter((item: any) => new Date(item.createdAt) >= weekAgo).length
      const recentClients = clients.filter((item: any) => new Date(item.createdAt) >= weekAgo).length
      const recentContacts = contacts.filter((item: any) => new Date(item.createdAt) >= weekAgo).length
      const recentSubscribers = subscribers.filter((item: any) => new Date(item.createdAt) >= weekAgo).length

      setStats({
        totalProjects: projects.length,
        totalClients: clients.length,
        totalContacts: contacts.length,
        totalSubscribers: subscribers.length,
        recentProjects,
        recentClients,
        recentContacts,
        recentSubscribers,
      })
    } catch (error) {
      console.error("Error fetching dashboard stats:", error)
      toast({
        title: "Error",
        description: "Failed to load dashboard statistics",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const StatCard = ({
    title,
    value,
    recent,
    icon: Icon,
    gradient,
    iconBg,
    iconColor,
  }: {
    title: string
    value: number
    recent: number
    icon: any
    gradient: string
    iconBg: string
    iconColor: string
  }) => (
    <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border-0">
      <div className={`absolute inset-0 ${gradient} opacity-90`} />
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500" />
      <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-white/90">{title}</CardTitle>
        <div className={`p-3 rounded-xl ${iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </CardHeader>
      <CardContent className="relative">
        <div className="text-3xl font-bold text-white mb-2">{value}</div>
        <div className="flex items-center text-sm">
          <TrendingUp className="h-4 w-4 text-white/80 mr-1" />
          <span className="text-white/90 font-medium">+{recent}</span>
          <span className="text-white/70 ml-1">this week</span>
        </div>
      </CardContent>
    </Card>
  )

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard Overview
          </h2>
          <p className="text-gray-600 mt-2">Welcome to your admin dashboard</p>
        </div>
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <span className="ml-2 text-gray-600">Loading dashboard...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard Overview
          </h2>
          <p className="text-gray-600 mt-2">Welcome to your admin dashboard</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
          <Calendar className="h-4 w-4" />
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Projects"
          value={stats.totalProjects}
          recent={stats.recentProjects}
          icon={FolderOpen}
          gradient="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"
          iconBg="bg-white/20 backdrop-blur-sm"
          iconColor="text-white"
        />

        <StatCard
          title="Happy Clients"
          value={stats.totalClients}
          recent={stats.recentClients}
          icon={Users}
          gradient="bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600"
          iconBg="bg-white/20 backdrop-blur-sm"
          iconColor="text-white"
        />

        <StatCard
          title="Contact Messages"
          value={stats.totalContacts}
          recent={stats.recentContacts}
          icon={MessageSquare}
          gradient="bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600"
          iconBg="bg-white/20 backdrop-blur-sm"
          iconColor="text-white"
        />

        <StatCard
          title="Newsletter Subscribers"
          value={stats.totalSubscribers}
          recent={stats.recentSubscribers}
          icon={Mail}
          gradient="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600"
          iconBg="bg-white/20 backdrop-blur-sm"
          iconColor="text-white"
        />
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-xl bg-gradient-to-r from-gray-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800">Quick Actions</CardTitle>
          <p className="text-gray-600">Manage your content efficiently</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/admin?tab=projects" className="group">
              <div className="p-6 text-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Plus className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-blue-700">Add Project</span>
              </div>
            </Link>

            <Link href="/admin?tab=clients" className="group">
              <div className="p-6 text-center rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Plus className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-purple-700">Add Client</span>
              </div>
            </Link>

            <Link href="/admin?tab=contacts" className="group">
              <div className="p-6 text-center rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 border-2 border-green-200 hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-green-700">View Messages</span>
              </div>
            </Link>

            <Link href="/admin?tab=newsletter" className="group">
              <div className="p-6 text-center rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-orange-700">Export Emails</span>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
