import { CartItem } from "@/types";

  interface CartState {
    data: CartItem[];
  }

import { createSlice , PayloadAction} from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name:"AddToCart",
    initialState: { data: [] } as CartState,
    reducers:{
        addItem(state, action: PayloadAction<CartItem>){

          console.log(state.data.filter((item)=>item.id === action.payload.id),"existing item")
          let existingItem = state.data.filter((item)=>(item.id === action.payload.id) && (item.title === action.payload.title))
          
          if(existingItem.length >0){
            let existingItemId = existingItem[0].id
            let addedQuantity:number = action.payload.quantity
            console.log(addedQuantity,"addedQuantity")
            const index = state.data.findIndex(obj => {
              return (obj.id === existingItemId)&&(obj.title===existingItem[0].title);
            });
            state.data[index].quantity+=addedQuantity
            state.data[index].total = action.payload.total*state.data[index].quantity
          }else{
            state.data.push(action.payload)
          } 
        },
        removeItem(state,action){
            
        }
    }
})

export default CartSlice.reducer;
export const {addItem} = CartSlice.actions;