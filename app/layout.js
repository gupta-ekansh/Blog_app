// import './globals.css'
import Navbar from '../components/Navbar'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CtrlAltElite',
  // description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <>
            <Navbar/>
            {children}
          </>
        </body>
    </html>
  )
}
