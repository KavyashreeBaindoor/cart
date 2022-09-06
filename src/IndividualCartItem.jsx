import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {faMinus } from '@fortawesome/free-solid-svg-icons';



const IndividualCartItem = ({title,img,price,id,amount,clear,Increase,Decrease}) => {
  
  return (
   <>
   <div>
                  <article className='cart-item'>
                           <img src={img} alt="" />
                           <div>
                                    <h4>{title}</h4>
                                    <h4>Rs {price}</h4>
                                    <button onClick={()=>{
                                      clear(id)
                                    }}>Remove</button>
                           </div>
                           <div>
                                    <button>
                                    <FontAwesomeIcon icon={faPlus} onClick={()=>{
                                      Increase(id)
                                    }}/>
                                    </button>
                                    <p className='quantityI'>{amount}</p>
                                    <button>
                                    <FontAwesomeIcon icon={faMinus} onClick={()=>{
                                      Decrease(id)
                                    }}/>
                                    </button>
                           </div>
                  </article>
         </div>
   </>
  )
}

export default IndividualCartItem