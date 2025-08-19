import React from 'react'
import Copyright from './Copyright'
import Links from './Links'

const Footer = () => {
  return (
    
       <footer className='bg-gray-100 px-10 py-16 mt-10'>
         <div className='flex flex-col md:flex-row justify-between gap-10'>
         <Links />
         </div>
         <Copyright />
       </footer>
    
  )
}

export default Footer