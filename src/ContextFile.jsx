import React from 'react'
import { useReducer } from 'react';
import { useState,useContext } from 'react';
import reducer from "./reducer";
import data from "./data";
import { useEffect } from 'react';
const AppContext=React.createContext();

const initialValue={
         cartItems:data,
         totalPrice:0,
         totalItems:0,


}


const AppProvider=(props)=>{
         // console.log(props);
         const [state,dispatch]=useReducer(reducer,initialValue);

//clear all cart items function
         const clearAllCartItems=()=>{
                  dispatch({type:"CLEAR_ITEM"})
         }
 //remove individual item from cart 
 const removeItem=(id)=>{
         const newCart=state.cartItems.filter((item)=>{
                  return item.id!==id;
                 })
         dispatch({type:"REMOVE_ITEM",payload:newCart})
 }     
 //increase individual quantity
 const Increase=(id)=>{
dispatch({type:"INCREASE",payload:id})
 }   
   //decrease individual item    
 const Decrease=(id)=>{
dispatch({type:"DECREASE",payload:id})
 }   
 //total price amount and total items of entire cart 
 useEffect(()=>{
dispatch({type:"TOTAL_PRICE"})
 },[state.cartItems])
       
      return(
      <>
      <AppContext.Provider value={{...state,clearAllCartItems,removeItem,Increase,Decrease}}>
         {props.children}
        </AppContext.Provider>
      </>
      )   
        
}

export {AppContext,AppProvider}