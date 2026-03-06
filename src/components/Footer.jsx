import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-900 text-gray-500 text-center p-6 border-t border-gray-800 mt-8'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} <span className='text-orange-500'>Manish Prajapati.</span> All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer