import React from 'react'
import Header from "../../components/navbar/Header"
import Footer from "../../components/navbar/Footer"

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className='w-full h-screen'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
