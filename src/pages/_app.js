import { AuthContextProvider } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
    </AuthContextProvider>
  )
}