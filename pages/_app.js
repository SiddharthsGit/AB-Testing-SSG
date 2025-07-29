import '@/styles/globals.css'
import '../styles/Message.module.css'
import { UserProvider } from '../context/userContext'
import posthog from 'posthog-js'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    posthog.init('phc_ukf8XN68wtCqDamu7xeVxmaG1zJfEawKqVNueF1tb5H', {
      api_host: 'https://app.posthog.com', // Change if self-hosted
    })
  }, [])

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
