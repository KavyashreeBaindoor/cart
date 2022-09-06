const reducer=(state,action)=>{
         console.log(state);

if (action.type === "CLEAR_ITEM") {
           return {
             ...state,
             cartItems:[]
           };
         }
if(action.type==="REMOVE_ITEM"){
        return {
         ...state,
         cartItems:action.payload
        }
}
if(action.type==="INCREASE"){
         const newstate=state.cartItems.map((item)=>{
                if(item.id===action.payload){
                               return {...item,amount:item.amount+1}
                        }
                        return item
         })
         return {
                  ...state,cartItems:newstate
         }
        
}
if(action.type==="DECREASE"){
         const newstate=state.cartItems.map((item)=>{
                if(item.id===action.payload){
                               return {...item,amount:item.amount-1}
                        }
                        return item
         })
         return {
                  ...state,cartItems:newstate
         }
        
}
if(action.type==="TOTAL_PRICE"){
        
        const calculate=state.cartItems.reduce((acc,n)=>{
         const {price,amount}=n;
          acc.totalItems+=amount;
          acc.totalMoney+=price*amount;
          return acc;
         
        },{
         totalMoney:0,totalItems:0
        })
       
         let {totalMoney,totalItems} =calculate; 
         totalMoney=Math.round(totalMoney) 
                  
         return {
                  ...state,totalItems,totalPrice:totalMoney
         }
             }       
         return state;

}
export default reducer;