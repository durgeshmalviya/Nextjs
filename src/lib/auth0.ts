'use client'

import { Auth0Client } from '@auth0/auth0-spa-js'
let auth0Client: Auth0Client | null = null


export const auth0 = new Auth0Client({
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN!,
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!,
  authorizationParams: {
    redirect_uri: typeof window !== 'undefined' ? window.location.origin : '',
    audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
    scope: process.env.NEXT_PUBLIC_AUTH0_SCOPE,
  },
})
