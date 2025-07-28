import React from 'react'
import Hero from '../components/Hero'
import PageTwo from '../components/PageTwo'

function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen '>
        <Hero />
        <PageTwo />
    </div>
  )
}

export default Home