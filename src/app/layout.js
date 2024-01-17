import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata = {
  icon: './favicon.ico', // /public path
  title: 'WhatsApp Groups',
  description: 'put your whatsapp groups here or join one',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        {process.env.NODE_ENV === 'production' && (
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9187309347349975"
            crossorigin="anonymous"></script>
        )}

      </head>


      <body className={` ${inter.className} bg-[#EEEEEE]`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
