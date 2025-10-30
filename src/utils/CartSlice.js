import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state , action)=>{
            //Vanilla (older)Redux => DONT MUTATE STATE , returning was mandatory
            //const newState = [...state];
            //newState.items.pust(action.payload);
            //return newState
            
            // Redux tool kit
            //mutating the state here is mandatory
            //Rtk uses immer BTS
            state.items.push(action.payload);
        },
        removeItem:(state, action) =>{
            state.items.pop();
        },
        //Original state = ["pizza"]
        clearCart:(state , action)=>{
            //Rtk - either mutate the existing state or return a new state
            // state.items.length = 0 ; //originalState = [];
            return {items: []} //this new object will be replaced inside originalState = [items:[]]
        },    
    },
});

export const {addItem , removeItem ,clearCart} = cartSlice.actions;
export default cartSlice.reducer