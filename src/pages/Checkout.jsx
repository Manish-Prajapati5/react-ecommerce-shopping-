import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { MapPin, IndianRupee, Package } from 'lucide-react'
import OrderConfirmation from './OrderConfirmation'

const Checkout = () => {
  const { cartTotal, cart, clearCart } = useCart();
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    address: '',
    city: '',
    zip: ''
  })
  const [confirmed, setConfirmed] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart()
    setConfirmed(true)
  }
  console.log("shipping Data :", deliveryDetails)
  if (confirmed) return <OrderConfirmation deliveryDetails={deliveryDetails} />

  return (
    <div className='container mx-auto px-4 md:px-8 pt-8'>
      <h2 className='text-5xl font-extrabold text-white mb-10 tracking-tight'>Finalize Order</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='lg-cols-span-2 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800'>
          <h3 className='text-2xl md:text-3xl font-bold text-orange-400 mb-6 flex items-center space-x-3 border-b border-gray-700 pb-4'>
            <MapPin className='w-7 h-7 text-orange-500' />
            <span>
              Shipping Information
            </span>
          </h3>
          <form
            className='space-y-6'
            onSubmit={handleSubmit}
          >
            {Object.keys(deliveryDetails).map((key) => (
              <div key={key} className='mb-4'>
                <label className='block text-sm font-semibold text-gray-200 mb-2 capitalize' htmlFor={key}>{key === 'zip' ? "Pin Code" : key}</label>
                <input
                  onChange={handleChange}
                  type={key === 'zip' ? "number" : "text"}
                  id={key}
                  name={key}
                  value={deliveryDetails[key]}
                  required
                  placeholder={key === 'zip' ? "Enter pin code" : `Enter ${key}`}
                  className='mt-1 block  w-full px-5 py-3 border bg-gray-700 text-white rounded-xl shadow-inner border-gray-800 placeholder-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200'
                />
              </div>
            ))}
            <div className='pt-6'>

              <button
                type='submit'
                className="w-full mt-8 py-3 px-3 bg-orange-600 text-white text-xl font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 space-x-2 flex items-center justify-center transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider">
                <span className='  flex items-center text-xl'>
                  <span className='flex text-left text-base '>Pay & Confirm: </span>
                  <IndianRupee className='ml-l w-5 h-5' />{cartTotal.toFixed(2)}</span>
              </button>

            </div>
          </form>

        </div>
        {/* order summary */}
        <div className='lg:col-span-1 p-8 bg-gray-900 rounded-2xl shadow-2xl border-1-4 sticky top-20 h-fit border  border-gray-800 '>
          <h3 className='text-3xl font-bold text-white mb-5 border-b border-y-gray-700 pb-3 flex items-center space-x-2'>
            <span><Package /></span>
            <span>Summary</span>
          </h3>
          <div className='space-y-4 text-gray-400'>
            {cart.map((item) => <div key={item.id} className='flex justify-between items-base border-b border-gray-800 pb-2'>
              <span className='truncate text-gray-300'>{item.name}</span>
              <span className='text-orange-400 font-medium'>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>)}

            <div className='space-y-4 text-gray-400'>
              <div className='flex justify-between text-xl'>
                <span className=''>SubTotal :</span>
                <span className='font-semibold flex items-center text-white'><IndianRupee className='w-5 h-5' />{cartTotal.toFixed(2)}</span>
              </div>
              <div className='flex justify-between text-xl'>
                <span className=''>Shipping (Express):</span>
                <span className='font-semibold text-green-400'>Free</span>
              </div>
              <div className='flex justify-between pt-6 border-t border-gray-700 '>
                <span className='text-2xl font-extrabold text-white'> Total Due:</span>
                <span className='text-2xl font-extrabold flex items-center text-orange-400'><IndianRupee className='w-5 h-5' /> {cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}


export default Checkout