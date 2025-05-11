'use client'

import { useAuth } from '../contexts/AuthContext'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  Cog6ToothIcon,
  PencilSquareIcon,
  HeartIcon,
  UserPlusIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline'

const User = () => {
  const { user, logout, isAuthenticated } = useAuth()
  const router = useRouter()

  const tools = [
    {
      name: 'Edit Profile',
      icon: <PencilSquareIcon className="w-5 h-5" />,
      onClick: () => router.push('/edit-profile'),
    },
    {
      name: 'Settings',
      icon: <Cog6ToothIcon className="w-5 h-5" />,
      onClick: () => router.push('/settings'),
    },
    {
      name: 'Wishlist',
      icon: <HeartIcon className="w-5 h-5" />,
      onClick: () => router.push('/wishlist'),
    },
    {
      name: 'Add Account',
      icon: <UserPlusIcon className="w-5 h-5" />,
      onClick: () => router.push('/add-account'),
    },
    {
      name: 'Add Coins',
      icon: <BanknotesIcon className="w-5 h-5" />,
      onClick: () => router.push('/wallet'),
    },
  ]

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex justify-center items-center px-4 py-12">
      <motion.div
        className="bg-white mt-10 z-1 w-full max-w-3xl rounded-2xl shadow-2xl p-8 md:p-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user?.name || 'User'}!</h2>
        <div className="flex justify-center mb-6">
          <img
            src={user?.picture || '/default-avatar.png'}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <p className="text-gray-700 mb-2 text-lg">Email: {user?.email}</p>

        {/* Tool Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 text-sm text-left">
          {tools.map((tool, idx) => (
            <button
              key={idx}
              onClick={tool.onClick}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition w-full"
            >
              {tool.icon}
              <span>{tool.name}</span>
            </button>
          ))}
        </div>

        <motion.button
          onClick={logout}
          className="mt-8 w-full md:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition"
          whileTap={{ scale: 0.95 }}
        >
          Logout
        </motion.button>
      </motion.div>
    </div>
  )
}

export default User
