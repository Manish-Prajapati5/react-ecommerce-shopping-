import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { Package, MapPin, Zap, IndianRupee } from 'lucide-react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const Checkout = () => {
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    address: '',
    city: '',
    zip: ''
  })
  return (
    <div className='container mx-auto px-4 md:px-8 pt-8'>
      <h2 className='text-5xl font-extrabold text-white mb-10 tracking-tight'>Finalize Order</h2>
      <div className='grid grid-cols-2 lg:grid-col-2 gap-10'>
        <div className='lg-cols-span-2 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800'>
          <h3 className='text-2xl md:text-3xl font-bold text-orange-400 mb-6 flex items-center space-x-3 border-b border-gray-700 pb-4'>
            <MapPin className='w-7 h-7 text-orange-500' />
            <span>
              Shipping Information
            </span>
          </h3>
          <form >
            {Object.keys(deliveryDetails).map((key) => (
              <div key={key} className='mb-4'>
                <label className='block text-sm font-semibold text-gray-200 mb-2 capitalize' htmlFor={key}>{key === 'zip' ? "Pin Code" : key}</label>
                <input
                  type={key === 'zip' ? "number" : "text"}
                  id={key}
                  name={key}
                  value={deliveryDetails[key]}
                  required
                  placeholder={key === 'zip' ? "Enter pin code" : `Enter ${key}`}
                  onChange={(e) => setDeliveryDetails({ ...deliveryDetails, [key]: e.target.value })}
                  className='mt-1 block  w-full px-5 py-3 border bg-gray-700 text-white rounded-xl shadow-inner border-gray-800 placeholder-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200'
                />
              </div>
            ))}
            <div className='pt-6'>
              <Link to={'/checkout'}>
                <button
                  type='submit'
                  className=" w-full mt-8 py-4 bg-orange-600 text-white text-xl font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 space-x-2 flex items-center justify-center transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider">

                  <Zap className="w-5 h-5" />
                  <span>Pay and Confirm Order <IndianRupee />{Cart}</span>
                </button>
              </Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Checkout