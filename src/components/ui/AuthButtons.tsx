'use client'

import { useAuth } from '../../app/contexts/AuthContext'
import { motion } from 'framer-motion'

export const AuthButtons = () => {
  const { isAuthenticated, user, login, signup, logout } = useAuth()

  return (
    <div className="flex items-center gap-4">
      {!isAuthenticated ? (
        <>
          <motion.button
            onClick={login}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
          <motion.button
            onClick={signup}
            className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
            whileTap={{ scale: 0.95 }}
          >
            Signup
          </motion.button>
        </>
      ) : (
        <>
          <p className="text-gray-800">Welcome, {user?.name}</p>
          <motion.button
            onClick={logout}
            className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
        </>
      )}
    </div>
  )
}
