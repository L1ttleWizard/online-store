"use client"
import { ScaleLoader } from 'react-spinners'
import 'animate.css'
import { Inter } from 'next/font/google'
import StoreProvider from '@/redux/StoreProvider'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor } from '@/redux/store'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Coffee Style',
  description: 'Offering best drinks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body className={inter.className}><StoreProvider><PersistGate loading={<ScaleLoader size = {500}/>} persistor={persistor}>{children}</PersistGate></StoreProvider></body>
      
    </html>
  )
}
