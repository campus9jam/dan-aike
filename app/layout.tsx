import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata={title:'DanAyko Logistics',description:'Fast, secure business delivery logistics',manifest:'/manifest.webmanifest'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
