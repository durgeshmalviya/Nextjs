'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const AuthCallback = () => {
  const router = useRouter()

  useEffect(() => {
    const handleAuthRedirect = async () => {
      // The logic is already in your AuthProvider, so just wait a moment and redirect
      await new Promise((res) => setTimeout(res, 1000))
      router.replace('/')
    }

    handleAuthRedirect()
  }, [router])

  return <p>Processing login...</p>
}

export default AuthCallback
