import '@/styles/globals.css'
import '../styles/Message.module.css'
import { UserProvider } from '../context/userContext'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
