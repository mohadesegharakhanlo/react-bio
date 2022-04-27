import React from 'react'
import Aboutme from '../components/Aboutme'
import Footer from '../components/footer'
import Hello from '../components/Hello'
import Services from '../components/Services'

function Home()
{
    return(
        <>
            <Hello/>
            <Aboutme/>
            <Services/>
            <Footer/>
        </>
    )
}
export default Home