import { createReducer } from "@reduxjs/toolkit";

export const cartReducer= createReducer({
    cartItemse:[],subTotal:0,shipping:0,tax:0,total:0,
},
{
    addToCart: (state, action) => {
        const item = action.payload;
        const isItemExist = state.cartItemse.find((i) => i.id === item.id);

        if(isItemExist){
            state.cartItemse.forEach((i)=>{
                if(i.id===item.id) i.quantity+=1;
             })
        }
        else{
            state.cartItemse.push(item);
        }

    },

    decre:(state, action) =>{
        const item=state.cartItemse.find((i) => i.id === action.payload);

        if(item.quantity >1){
            state.cartItemse.forEach((i)=>{
                if(i.id===item.id) i.quantity-=1;
             })
        }

    },

    deleteFromCart:(state, action) =>{
        state.cartItemse =state.cartItemse.filter((i)=>i.id!==action.payload)

    },

    calculatePrice:(state) =>{
        let sum=0;
        state.cartItemse.forEach((i)=>(sum+=i.price*i.quantity));
        state.subTotal=sum;
        state.tax = +(state.subTotal*0.12).toFixed();
        state.total=state.subTotal+state.tax+state.shipping;
    },
  
    

}
);