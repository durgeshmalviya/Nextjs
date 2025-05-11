'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { auth0 } from '../../lib/auth0'

interface User {
  name?: string
  email?: string
  picture?: string
  [key: string]: any
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: () => Promise<void>
  signup: () => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const initAuth = async () => {
      if (window.location.search.includes('code=') && window.location.search.includes('state=')) {
        try {
          await auth0.handleRedirectCallback()
          window.history.replaceState({}, document.title, window.location.pathname)
        } catch (error) {
          console.error('Error handling redirect callback:', error)
        }
      }

      const isAuth = await auth0.isAuthenticated()
      setIsAuthenticated(isAuth)

      if (isAuth) {
        const user = await auth0.getUser()
        console.log('Logged in user:', user) // ✅ Display in console
        setUser(user || null)
      }
    }

    initAuth()
  }, [])

  const login = async () => {
    await auth0.loginWithRedirect({
      authorizationParams: { screen_hint: 'login' },
    })
  }

  const signup = async () => {
    await auth0.loginWithRedirect({
      authorizationParams: { screen_hint: 'signup' },
    })
  }

  const logout = () => {
    auth0.logout({ logoutParams: { returnTo: window.location.origin } })
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
