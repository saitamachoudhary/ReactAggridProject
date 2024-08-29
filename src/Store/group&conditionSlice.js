import { createSlice } from "@reduxjs/toolkit";


export const groupconditionSlice=createSlice({
    name:'group&conditionSlice',
    initialState:[],
    reducers:{
     addgroups:(state,action)=>{
       state=action.payload;
     },
     addconditions:(state,action)=>{
        
     }
    }
})


export default groupconditionSlice.reducer;