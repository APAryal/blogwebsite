# Blog Admin Dashboard 🚀

A complete, professional admin dashboard for managing blog content with React, Tailwind CSS, and Zustand.

## ✨ Features

### UI Features
- ✅ **Professional Clean Design** - Modern gradient-based UI with smooth animations
- ✅ **Sidebar Navigation** - Collapsible sidebar with menu items
- ✅ **Top Navbar** - User profile, notifications, theme toggle
- ✅ **Responsive Layout** - Mobile-first design, works on all devices
- ✅ **Dark/Light Mode** - Toggle between themes with persistent state

### Functional Features
- ✅ **Dashboard Home** - Total Posts, Users, Views, Recent Posts
- ✅ **Posts Management** - List, Create, Edit, Delete posts
- ✅ **Media Library** - Upload images, videos, audio files
- ✅ **Protected Routes** - Only logged-in users can access
- ✅ **Toast Notifications** - Success/error messages

## 📦 Installation

```bash
# Install dependencies
npm install zustand react-hot-toast

# Run development server
npm run dev
```

## 🔐 Login Credentials

```
Email: admin@blog.com
Password: admin123
```

## 🎯 Key Features

- **usePosts() Hook** - fetchPosts(), createPost(), editPost(), removePost()
- **useAuth() Hook** - loginUser(), logoutUser() with loading states
- **Zustand Stores** - Auth, Posts, Theme management
- **Media Upload** - Image, Audio, Video support
- **Responsive Design** - Mobile, Tablet, Desktop optimized

## 📁 Structure

```
src/
├── components/     # Sidebar, TopNavbar, ProtectedRoute, StatCard
├── hooks/          # usePosts, useAuth
├── store/          # useAuthStore, usePostStore, useThemeStore
├── pages/          # Login, Dashboard, Posts, Media
└── App.jsx         # Routes & Layout
```

## 🚀 Usage

1. Login with demo credentials
2. View dashboard with stats
3. Manage posts (create/edit/delete)
4. Upload media files
5. Toggle dark/light mode

Made with ❤️ using React + Vite + Tailwind + Zustand
