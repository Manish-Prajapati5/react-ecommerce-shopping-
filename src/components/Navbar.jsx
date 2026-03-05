import { Home, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { cartCount } = useCart()
  console.log(cartCount)
  return (
    <>
      <header className='sticky top-0 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-900/50 border-b z-10 border-orange-900'>
        <div className="container mx-auto px-4 py-4 flex items-center  justify-between">
          <div className='flex items-center space-x-3 cursor-pointer'>
            <Home className='w-8 h-8 mt-2 text-orange-400 drop-shadow-lg ' />
            <h1 className='text-4xl font-extrabold tracking-widest uppercase'>M<span className='text-orange-400'>Store</span></h1>
          </div>
          <nav className='flex items-center space-x-6'>
            <Link to={'/cart'}
              className='relative p-3 bg-orange-500/10 rounded-xl hover:bg-orange-500/20 transition duration-200 border border-orange-500/20 hover:border-orange-500/50 shadow-lg cursor-pointer'>
              <ShoppingCart className='w-6 h-6  text-orange-400' />
              {cartCount > 0 && (<span className='absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full min-w-6 h-5' >{cartCount}</span>)}
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar