# TechCorp Landing Page

A modern, responsive landing page with admin panel built with Next.js 14, MongoDB, and Tailwind CSS.

## Features

### Landing Page
- **Animated Hero Section** with gradient backgrounds and floating elements
- **Projects Showcase** with horizontal scrolling and auto-scroll functionality
- **Client Testimonials** with beautiful card layouts and animations
- **Contact Form** with success popups and form validation
- **Newsletter Subscription** with confirmation dialogs
- **Dark Mode Support** with theme toggle
- **Fully Responsive** design for all devices

###  Admin Panel
- **Professional Dashboard** with gradient stat cards and quick actions
- **TanStack Table Integration** with sorting, filtering, and pagination
- **Image Cropping** functionality for all uploads
- **CRUD Operations** for projects, clients, contacts, and newsletter
- **Export Functionality** for contacts and newsletter subscribers
- **Real-time Statistics** and analytics
- **Dark Mode Support** throughout admin interface

### Technical Features
- **MongoDB Integration** with Mongoose ODM
- **Server-Side Rendering** with Next.js 14
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** with mobile-first approach
- **SEO Optimized** with proper meta tags and structured data

## Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB Atlas
- npm or yarn

### Installation

1. **Clone the repository**
\`\`\`bash
git clone <repository-url>
cd landing-page-app
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
\`\`\`

3. **Set up environment variables**
\`\`\`bash
cp .env.example .env.local
\`\`\`

Edit `.env.local` with your MongoDB connection string:
\`\`\`env
MONGODB_URI=mongodb://localhost:27017/landing-page
\`\`\`

4. **Run the development server**
\`\`\`bash
npm run dev
\`\`\`

5. **Seed the database (optional)**
\`\`\`bash
npm run seed
\`\`\`

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
├── app/                    # Next.js 14 App Router
│   ├── admin/             # Admin panel pages
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── admin/             # Admin-specific components
│   ├── ui/                # Reusable UI components
│   └── ...                # Landing page components
├── lib/                   # Utility libraries
├── models/                # MongoDB models
├── scripts/               # Database scripts
└── types/                 # TypeScript type definitions
\`\`\`

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `DELETE /api/projects?id={id}` - Delete project

### Clients
- `GET /api/clients` - Get all clients
- `POST /api/clients` - Create new client
- `DELETE /api/clients?id={id}` - Delete client

### Contacts
- `GET /api/contact` - Get all contact submissions
- `POST /api/contact` - Submit contact form

### Newsletter
- `GET /api/newsletter` - Get all newsletter subscriptions
- `POST /api/newsletter` - Subscribe to newsletter

## Admin Panel Features

### Dashboard
- Real-time statistics with gradient cards
- Quick action buttons for common tasks
- Recent activity tracking
- Growth metrics and analytics

### Projects Management
- Professional table with image thumbnails
- Search and sort functionality
- Image cropping for project images
- Bulk operations support

### Clients Management
- Testimonial management with profile images
- Designation and company information
- Image cropping for client photos
- Export functionality

### Contact Management
- View all contact form submissions
- Search and filter contacts
- Export to CSV functionality
- Contact statistics and analytics

### Newsletter Management
- Subscriber list with search functionality
- Subscription analytics
- Export subscriber list
- Growth tracking

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

2. **Deploy to Vercel**
- Connect your GitHub repository to Vercel
- Add environment variables in Vercel dashboard
- Deploy automatically

### Environment Variables for Production
\`\`\`env
MONGODB_URI=your-production-mongodb-uri
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-production-secret
\`\`\`

## Customization

### Styling
- Edit `tailwind.config.ts` for theme customization
- Modify `app/globals.css` for global styles
- Update color schemes in CSS variables

### Content
- Update company information in components
- Modify hero section content in `components/hero.tsx`
- Customize footer links in `components/footer.tsx`

### Features
- Add new API endpoints in `app/api/`
- Create new admin sections in `components/admin/`
- Extend database models in `models/`

### Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Database**: MongoDB with Mongoose
- **Tables**: TanStack Table
- **Image Processing**: react-easy-crop
- **Icons**: Lucide React
- **Animations**: CSS animations and Tailwind transitions

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@techcorp.com or create an issue in the repository.
\`\`\`

This is the complete, fully functional landing page application with all the requested features:

##  **Complete Feature Set:**

### **Enhanced UI/UX:**
- Beautiful gradient dashboard cards with linear colors
- Professional TanStack tables with profile images in first column
- Image cropping functionality for all uploads
- Success popups for contact form and newsletter
- Animated contact section with floating elements
- Dark mode support throughout the application
- Attractive favicon with gradient SVG

### **Admin Panel:**
- Complete dashboard with real-time statistics
- Professional data tables for all entities
- Search, sort, and pagination functionality
- Image cropping with aspect ratio control
- Export functionality for contacts and newsletter
- Quick actions that properly navigate to tabs

### **Landing Page:**
- Animated hero section with blob animations
- Horizontal scrolling projects and clients sections
- Enhanced contact form with success dialogs
- Newsletter with confirmation popups
- Fully responsive design
- SEO optimized with proper meta tags

###**Technical Features:**
- MongoDB integration with proper models
- Complete API routes for all operations
- TypeScript throughout the application
- Next.js 14 with App Router
- Proper error handling and loading states
- Environment variable configuration

 
