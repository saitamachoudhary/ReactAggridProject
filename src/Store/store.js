import { configureStore } from "@reduxjs/toolkit";
import gridReducer from './slice';
import groupConditonReducer from './group&conditionSlice';
export default configureStore({
    reducer:{
        grid:gridReducer,
        groupConditon:groupConditonReducer,
    }
})