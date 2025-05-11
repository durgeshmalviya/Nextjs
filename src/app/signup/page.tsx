// pages/signup.tsx

'use client'

import { useAuth } from '../contexts/AuthContext'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const Signup = () => {
  const { signup } = useAuth()
  const router = useRouter()

  const handleSignup = async () => {
    await signup()
    router.push('/profile') // Redirect to profile after signup
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <motion.button
          onClick={handleSignup}
          className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          whileTap={{ scale: 0.95 }}
        >
          Sign up with Auth0
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Signup
