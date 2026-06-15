import './globals.css'

export const metadata = {
  title: 'TruHealth Clinic | General Physician — Kondhwa, Pune',
  description: 'TruHealth Clinic by Dr. Asiya Sayyad. General Physician in Kondhwa, Pune. Serving Salunke Vihar, Wanowrie, NIBM, Undri. Call 088308 93118.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
