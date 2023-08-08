
import 'animate.css'
import { Inter } from 'next/font/google'
import StoreProvider from '@/redux/StoreProvider'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Coffee Style',
  description: 'Offering best drinks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body className={inter.className}><StoreProvider>{children}</StoreProvider></body>
      
    </html>
  )
}
