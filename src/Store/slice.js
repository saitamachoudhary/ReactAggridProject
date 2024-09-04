import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    grid: [],
}
const gridSlice = createSlice({
    name: 'Grid',
    initialState,
    reducers: {
        addGrid: (state, action) => {
            state.grid.push(action.payload);
        },
        editconditionorgroup:(state,action)=>{
          const{_id,components}=action.payload;
          const item=state.grid.find(ele=>ele._id===_id);
          if(item){
            item.SecurityConditions=components;
          }
        },
        editdropdown:(state,action)=>{
         const{dDvalue,_id}=action.payload;
         const item=state.grid.find(ele=>ele._id===_id);
         if(item){
            item.Assignedto=dDvalue;
         }
        },
        deleteGriddata:(state,action)=>{
          const item=state.grid.find(ele=>ele._id===action.payload);
          if(item){
            state.grid=state.grid.filter(ele=>ele._id!==action.payload);
          }
        }
    }
})

export const { addGrid,editconditionorgroup,editdropdown,deleteGriddata} = gridSlice.actions;
export default gridSlice.reducer;