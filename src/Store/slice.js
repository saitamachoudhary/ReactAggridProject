import { createSlice } from "@reduxjs/toolkit";

const initialState={
    grid:[],
}
const gridSlice=createSlice({
    name:'Grid',
    initialState,
    reducers:{
     addGrid:(state,action)=>{
      state.grid.push(action.payload);
     }
    }
})

export const {addGrid}=gridSlice.actions;
export default gridSlice.reducer;