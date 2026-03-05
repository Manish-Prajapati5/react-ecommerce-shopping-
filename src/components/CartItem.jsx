import React from 'react'
import { useCart } from '../context/CartContext'
import { IndianRupee, X } from 'lucide-react'

const CartItem = ({ item }) => {
  const { addCart, removeCart } = useCart()
  const increasedQuantity = () => addCart(item)
  const decreasedQuantity = () => removeCart(item.id)

  return (
    <div className='flex flex-col items-center sm:flex-row justify-between p-4 sm:p-4 mb-4 bg-gray-900 rounded-xl shadow-2xl border-gray-800 transition duration-300 hover:border-orange-600/50'>
      <div className='flex items-center space-x-4 w-full sm:w-auto '>
        <img
          className='w-24 h-24 object-cover rounded-lg border-2 border-gray-700'
          src={item.image} alt={item.name} />

        <div className=' '>
          <h3 className='text-xl font-bold text-white line-clamp-1'>{item.name}</h3>

          <p className='text-lg text-orange-400 font-semibold'>{item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className='flex items-center justify-between sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4'>
        <div className='flex items-center border border-gray-700 rounded-full overflow-hidden shadow-lg'>
          <button
            onClick={() => decreasedQuantity()}
            className='p-2 text-gray-400 bg-gray-800 hover:bg-gray-700 transition duration-150 w-8 h-8 flex items-center justify-center'>-</button>
          <span>{item.quantity}</span>
          <button
            onClick={() => increasedQuantity()}
            className='p-2 text-gray-400 bg-gray-800 hover:bg-gray-700 transition duration-150 w-8 h-8 flex items-center justify-center'>+</button>
        </div>
        <p className='flex items-center font-extrabold text-orange-300 w-24 text-right'><IndianRupee className='w-5 h-5' /><span>{(item.price * item.quantity).toFixed(2)}</span></p>
        <button
        onClick={()=>removeCart(item.id)}
         className='p-3 bg-red-800/20 text-red-400 rounded-full hover:bg-red-800/40 transition duration-150 shadow-md'>
          <X/>
        </button>
      </div>
    </div>
  )
}

export default CartItem