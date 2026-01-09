import { createContext, useContext, useEffect, useState } from 'react'
import * as AuthService from '../services/auth.service'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = AuthService.subscribeToAuth((firebaseUser) => {
      setUser(firebaseUser)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const login = (email, password) => AuthService.login(email, password)
  const signup = (email, password) => AuthService.signup(email, password)
  const logout = () => AuthService.logout()

  const value = { user, loading, login, signup, logout }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
