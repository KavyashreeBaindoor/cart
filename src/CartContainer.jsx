import React from 'react';


import IndividualCartItem from './IndividualCartItem';
import { AppContext } from './ContextFile';
import { useContext } from 'react';

const CartContainer = () => {
const {cartItems,totalPrice,clearAllCartItems,removeItem,Increase,Decrease}=useContext(AppContext)

  //checking the length of the cartitems array
  if(cartItems.length===0){
    return (<>
    <section className="cart">
         <header>
                  <h1>Your Shopping Cart</h1>
                  <h4 className='empty-cart'>is empty</h4>
         </header>
    </section>
    </>)
  }

  return (
   <section className="cart">
         <header>
                  <h1>Your Shopping Cart</h1>
                 
         </header>
         {/* Individual item mapping */}
         <div>
          {cartItems.map((item)=>{
            return <IndividualCartItem {...item} clear={removeItem} Increase={Increase} Decrease={Decrease} key={item.id}/>
          })}
         </div>

         {/* Footer */}
         <footer>
       <div className='cart-total'>
          <h4>
            total <span>${totalPrice}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn' onClick={clearAllCartItems}>
          clear cart
        </button>
      </footer>
   </section>
  )
}

export default CartContainer