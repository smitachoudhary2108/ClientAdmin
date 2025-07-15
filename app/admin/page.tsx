"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FolderOpen, Mail, MessageSquare, BarChart3 } from "lucide-react"
import AdminDashboard from "@/components/admin/admin-dashboard"
import ProjectsTable from "@/components/admin/projects-table"
import ClientsTable from "@/components/admin/clients-table"
import ContactsTable from "@/components/admin/contacts-table"
import NewsletterTable from "@/components/admin/newsletter-table"
import AdminHeader from "@/components/admin/admin-header"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  useEffect(() => {
    // Check URL params for tab
    const urlParams = new URLSearchParams(window.location.search)
    const tab = urlParams.get("tab")
    if (tab) {
      setActiveTab(tab)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <FolderOpen className="h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="clients" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Clients
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Contacts
            </TabsTrigger>
            <TabsTrigger value="newsletter" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Newsletter
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <AdminDashboard />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectsTable />
          </TabsContent>

          <TabsContent value="clients">
            <ClientsTable />
          </TabsContent>

          <TabsContent value="contacts">
            <ContactsTable />
          </TabsContent>

          <TabsContent value="newsletter">
            <NewsletterTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
