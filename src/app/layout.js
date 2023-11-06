import './globals.css'

export const metadata = {
  title: 'My App Showcase',
  description: 'A showcase of all my simple apps',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body >{children}</body>
    </html>
  )
}
