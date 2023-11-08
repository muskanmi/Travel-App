import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { getServerSession } from 'next-auth'
import SessionProvider from "@/utils/SessionProvider";

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <div className=''>
            <Navbar />
            {children}
            <Footer/>
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
