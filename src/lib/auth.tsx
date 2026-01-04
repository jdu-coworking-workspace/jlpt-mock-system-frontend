import { createContext, useContext, useState, ReactNode } from 'react'

export type Role = 'user' | 'master'

interface User {
  id: string
  name: string
  email: string
  role: Role
}

interface AuthContextType {
  user: User | null
  login: (email: string, role: Role) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string, role: Role) => {
    setUser({
      id: '1',
      name: role === 'master' ? 'Master Admin' : 'JLPT Student',
      email,
      role,
    })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
