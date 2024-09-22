import "./globals.css"

import { inter } from "@/lib/fonts"

import Menu from "@/components/Menu"

export const metadata = {
  title: "Wiki",
  description: "Serach for information",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-slate-200`}>
        <Menu />
        {children}
      </body>
    </html>
  )
}
