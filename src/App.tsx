"use client"

import { Routes, Route, Navigate } from "react-router-dom"
import { useTheme } from "./contexts/ThemeContext"
import { useAuth } from "./contexts/AuthContext"
import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import "./index.css"

// Layouts
import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout"

// Pages
import LandingPage from "./pages/LandingPage"
import NotFoundPage from "./pages/NotFoundPage"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const { theme } = useTheme()
  const { loading } = useAuth()

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <AnimatePresence mode="wait">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>

      <ToastContainer />
    </div>
  )
}

export default App
