import React from 'react'

function CartItem({item}) {

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4">

        <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
        />

        <div>
            <h2 className="text-lg font-bold">
                {item.name}
            </h2>

            <p>₹ {item.price}</p>

            <p>Quantity : {item.quantity}</p>
        </div>

    </div>
  )
}

export default CartItem;