'use client'
import Colors from '@/ui/colors/colors';
import Footer from '@/ui/organisms/footer'
import Navbar from '@/ui/organisms/navbar'
import React from 'react'
import styled from 'styled-components';

interface Iprops{
    children: React.ReactNode,
}

const Layout = styled.div`
  background-color: ${Colors.background};
`;
export default function layout(props: Iprops){
    const { children } = props
  return (
    <Layout>
        <Navbar/>
        {children}
        <Footer/>
    </Layout>
  )
}
