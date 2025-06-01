# 🍕 Pieza Dashboard

> **A modern, responsive pizza order management dashboard built with Next.js 14**

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC)](https://tailwindcss.com/)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-4.24-purple)](https://next-auth.js.org/)

A comprehensive pizza order management system featuring Google OAuth authentication, real-time order tracking, advanced filtering, and a beautiful responsive interface.

![Pieza Dashboard Preview](https://via.placeholder.com/800x400/f97316/ffffff?text=Pieza+Dashboard)

## ✨ Features

### 🔐 **Authentication & Security**
- Google OAuth 2.0 integration with NextAuth.js
- Protected routes with middleware
- Secure session management
- Automatic redirects based on authentication state

### 📊 **Dashboard & Analytics**
- Personalized welcome page with user information
- Real-time order statistics and metrics
- Revenue tracking and order status overview
- Interactive charts and data visualization

### 🍕 **Order Management**
- Complete pizza order tracking system
- Advanced search functionality (customer, pizza type, order ID)
- Multi-column sorting (date, price, status, etc.)
- Status-based filtering with visual badges
- Responsive data table with pagination

### 🎨 **Modern UI/UX**
- Clean, professional design with Tailwind CSS
- Smooth animations with Framer Motion
- Fully responsive (mobile, tablet, desktop)
- Glass morphism effects and gradients
- Loading states and error handling
- Toast notifications for user feedback

### ⚡ **Performance & Development**
- Next.js 14 App Router for optimal performance
- TypeScript for type safety
- Zustand for state management
- Hot reload and fast refresh
- Optimized images and assets

## 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Authentication** | NextAuth.js |
| **State Management** | Zustand |
| **Animations** | Framer Motion |
| **Notifications** | React Hot Toast |
| **Icons** | Lucide React |
| **Testing** | Jest + React Testing Library |
| **Deployment** | Vercel / Railway |

## 📁 Project Structure

```
pieza-dashboard/
├── 📁 app/                          # Next.js App Router
│   ├── 📁 (auth)/
│   │   └── 📁 login/               # 🔐 Authentication pages
│   ├── 📁 (dashboard)/
│   │   ├── 📁 dashboard/           # 🏠 Main dashboard
│   │   └── 📁 orders/              # 🍕 Orders management
│   ├── 📁 api/
│   │   └── 📁 auth/                # 🔑 NextAuth API routes
│   ├── 📄 globals.css              # 🎨 Global styles
│   ├── 📄 layout.tsx               # 📐 Root layout
│   ├── 📄 loading.tsx              # ⏳ Loading UI
│   └── 📄 page.tsx                 # 🏠 Home page
├── 📁 components/
│   ├── 📁 ui/                      # 🔧 Reusable UI components
│   │   ├── 📄 Button.tsx
│   │   ├── 📄 Badge.tsx
│   │   └── 📄 LoadingSpinner.tsx
│   ├── 📁 auth/                    # 🔐 Auth components
│   │   ├── 📄 LoginButton.tsx
│   │   └── 📄 LogoutButton.tsx
│   ├── 📁 dashboard/               # 📊 Dashboard components
│   │   ├── 📄 Navbar.tsx
│   │   ├── 📄 OrdersTable.tsx
│   │   └── 📄 OrderStats.tsx
│   └── 📁 providers/               # 🔄 Context providers
│       ├── 📄 AuthProvider.tsx
│       └── 📄 ToastProvider.tsx
├── 📁 lib/
│   ├── 📄 auth.ts                  # 🔑 NextAuth config
│   ├── 📄 utils.ts                 # 🛠️ Utility functions
│   └── 📄 mockData.ts              # 📋 Sample data
├── 📁 types/
│   └── 📄 index.ts                 # 📝 TypeScript definitions
├── 📄 middleware.ts                # 🛡️ Route protection
├── 📄 tailwind.config.js           # 🎨 Tailwind configuration
├── 📄 next.config.js               # ⚙️ Next.js configuration
├── 📄 package.json                 # 📦 Dependencies
└── 📄 README.md                    # 📖 Documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** 18+ and **npm**
- **Google Cloud Console** account for OAuth setup
- **Git** for version control

### 1. 📥 Clone & Setup Project

```bash
# Clone the repository
git clone git@github.com:tushar-agarwal7/Peiza.git
cd pieza


```

### 2. 📦 Install Dependencies

```bash
# Install main dependencies
bun install 
```

### 3. 🔑 Google OAuth Setup

1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**
2. **Create a new project** or select existing one
3. **Enable APIs:**
   - Go to "APIs & Services" → "Library"
   - Search and enable "Google+ API"
4. **Create OAuth 2.0 Credentials:**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth 2.0 Client IDs"
   - Application type: "Web application"
   - **Authorized redirect URIs:**
     ```
     http://localhost:3000/api/auth/callback/google
     https://your-domain.com/api/auth/callback/google
     ```

### 4. 🔐 Environment Variables

1. **Copy environment template:**
```bash
cp .env.example .env.local
```

2. **Generate NextAuth secret:**
```bash
openssl rand -base64 32
```

3. **Update `.env.local`:**
```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret-key-here

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 5. 🚀 Run Development Server

```bash
npm run dev
```

**🎉 Open [http://localhost:3000](http://localhost:3000) to see the application!**

## 🌐 Deployment

### 🚀 Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Update `NEXTAUTH_URL` to your production domain
   - Deploy!

3. **Environment Variables in Vercel:**
```env
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 🚄 Deploy to Railway

1. **Connect Repository:**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Add environment variables
   - Deploy with automatic builds

## 📖 Usage Guide

### 🔐 **Authentication Flow**
1. Visit the application URL
2. Click **"Continue with Google"** button
3. Authorize with your Google account
4. Get redirected to the dashboard

### 🏠 **Dashboard Features**
- **Welcome Section:** Personalized greeting with user info
- **Quick Stats:** Today's orders, revenue, active orders
- **Recent Orders:** Last 5 orders overview
- **Quick Actions:** Navigate to orders, analytics (coming soon)

### 🍕 **Order Management**
- **View Orders:** Complete table with all pizza orders
- **Search:** Find orders by customer name, pizza type, or order ID
- **Filter:** Filter by order status (Pending, Preparing, etc.)
- **Sort:** Click column headers to sort data
- **Status Tracking:** Visual badges for order status

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📊 Mock Data Overview

The application includes 10 sample pizza orders with:

- **Order IDs:** PZA001 through PZA010
- **Customers:** Various customer names and emails
- **Pizza Types:** Margherita, Pepperoni, Veggie Supreme, etc.
- **Statuses:** Pending, Preparing, Out for Delivery, Delivered, Cancelled
- **Pricing:** Realistic pizza pricing ($16.99 - $56.97)
- **Dates:** Recent order timestamps

## 🎨 UI Components

### 🔧 **Reusable Components**
- **Button:** Various styles (primary, secondary, outline, ghost)
- **Badge:** Color-coded status indicators
- **LoadingSpinner:** Consistent loading states
- **Table:** Sortable, filterable data display

### 📱 **Layout Components**
- **Navbar:** Responsive navigation with user menu
- **OrdersTable:** Advanced data table with search/filter
- **OrderStats:** Statistics cards with icons

## 🔧 Customization

### 🎨 **Modify Color Scheme**
Update `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#your-color', // Change primary color
    600: '#your-darker-color',
  }
}
```

### ➕ **Add New Order Status**
1. Update `OrderStatus` type in `types/index.ts`
2. Add color in `lib/utils.ts` (`getStatusColor`)
3. Update filter options in `OrdersTable.tsx`

### 📄 **Add New Pages**
1. Create page in `app/(dashboard)/new-page/page.tsx`
2. Add navigation link in `components/dashboard/Navbar.tsx`
3. Update middleware if authentication required

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit changes:** `git commit -m 'Add amazing feature'`
4. **Push to branch:** `git push origin feature/amazing-feature`
5. **Open Pull Request**

### 📝 **Development Guidelines**
- Use TypeScript for all new code
- Follow existing code style and patterns
- Add proper error handling
- Include responsive design considerations
- Test on multiple screen sizes

## 🐛 Troubleshooting

### Common Issues

**❌ Google OAuth Error:**
- Check redirect URIs in Google Cloud Console
- Verify environment variables are correct
- Ensure Google+ API is enabled

**❌ NextAuth Session Error:**
- Generate new `NEXTAUTH_SECRET`
- Check environment variables are loaded
- Clear browser cookies and try again

**❌ Build Errors:**
- Ensure all dependencies are installed
- Check TypeScript errors: `npm run type-check`
- Verify all imports are correct

## 📞 Support

- **Issues:** Create an issue in the repository
- **Documentation:** Check this README and inline comments
- **Community:** Reach out via GitHub Discussions

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for hosting and deployment
- **Tailwind CSS** for utility-first styling
- **NextAuth.js** for authentication
- **Framer Motion** for smooth animations

---

<div align="center">

**Built with ❤️ using Next.js 14 and modern web technologies**

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**⭐ Don't forget to star the repository if you found it helpful!**

</div>