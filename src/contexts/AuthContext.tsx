"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { api } from "../services/api"
import { useToast } from "./ToastContext"

interface User {
  id: string
  email: string
  name: string
  plan: "free" | "pro" | "business"
  usageLimit: number
  usageCount: number
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  loading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  updateProfile: (data: Partial<User>) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const { showToast } = useToast()

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      const token = localStorage.getItem("token") || "kkk"
      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`
        try {
          //const response = await api.get("/auth/me")
          setUser({
            id: "1",
            email: "a@b.com",
            name: "John Doe",
            plan: "free",
            usageLimit: 100,
            usageCount: 50,
          })
        } catch (error) {
          console.error("Error fetching user:", error)
          localStorage.removeItem("token")
          delete api.defaults.headers.common["Authorization"]
        }
      }
      setLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { email, password })
      const { token, user } = response.data
      localStorage.setItem("token", token)
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setUser(user)
      showToast("Login successful", "success")
      return true
    } catch (error) {
      console.error("Login error:", error)
      showToast("Invalid email or password", "error")
      return false
    }
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await api.post("/auth/register", { name, email, password })
      const { token, user } = response.data
      localStorage.setItem("token", token)
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`
      setUser(user)
      showToast("Registration successful", "success")
      return true
    } catch (error) {
      console.error("Registration error:", error)
      showToast("Registration failed. Email may already be in use.", "error")
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    delete api.defaults.headers.common["Authorization"]
    setUser(null)
    showToast("Logged out successfully", "success")
  }

  const updateProfile = async (data: Partial<User>) => {
    try {
      const response = await api.patch("/auth/profile", data)
      setUser((prev) => (prev ? { ...prev, ...response.data } : null))
      showToast("Profile updated successfully", "success")
      return true
    } catch (error) {
      console.error("Profile update error:", error)
      showToast("Failed to update profile", "error")
      return false
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
