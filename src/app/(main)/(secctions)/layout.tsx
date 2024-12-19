import Footer from '@/ui/organisms/footer'
import Navbar from '@/ui/organisms/navbar'
import React from 'react'

interface Iprops{
    children: React.ReactNode,
}
export default function layout(props: Iprops){
    const { children } = props
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
