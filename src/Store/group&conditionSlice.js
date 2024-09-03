import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  groupconditions: [],
};
export const groupconditionSlice = createSlice({
  name: "group&conditionSlice",
  initialState,
  reducers: {
    makegroupconditionsEmpty:(state)=>{
     state.groupconditions=[];
    },
    makegroupconditionsFill:(state,action)=>{
     state.groupconditions=action.payload;
    },
    addgroups: (state) => {
      state.groupconditions.push({
        type: "group",
        id: nanoid(),
        subconditions: [
          {
            type: "subconditions",
            id: nanoid(),
            optionsValue1: "",
            optionsValue2: "",
            optionSelectorInput: "",
          },
        ],
      });
    },
    addconditions: (state) => {
      state.groupconditions.push({
        type: "conditions",
        id: nanoid(),
        optionsValue1: "",
        optionsValue2: "",
        optionSelectorInput: "",
      });
    },
    addsubconditions: (state, action) => {
      const { id } = action.payload;
      const item = state.groupconditions.find((ele) => ele.id === id);
      if (item) {
        item.subconditions.push({
          type: "subcondtions",
          id: nanoid(),
          optionsValue1: "",
          optionsValue2: "",
          optionSelectorInput: "",
        });
      }
    },
    addconditonsvalues: (state, action) => {
      const { id, key, value } = action.payload;
      const condition = state.groupconditions.find((ele) => ele.id === id);
      if (condition) {
        condition[key] = value;
      } else {
        for (let group of state.groupconditions) {
          const subcondition = group.subconditions?.find(
            (ele) => ele.id === id
          );
          if (subcondition) {
            subcondition[key] = value;
            break;
          }
        }
      }
    },
    deleteGroups: (state, action) => {
      const { id } = action.payload;
      state.groupconditions=state.groupconditions.filter(ele=>ele.id!==id);
    },
    deleteconditions:(state,action)=>{
     const{id}=action.payload;
     const findIndex=state.groupconditions.findIndex(ele=>ele.id===id);
     if(findIndex!==-1){
      state.groupconditions=state.groupconditions.filter(ele=>ele.id!==id);
     }
     else{
      console.log(id);
      state.groupconditions.forEach((subcon)=>{
        subcon.subconditions=subcon.subconditions.filter(ele=>(ele.id!==id))
      })
     }
    }
  },
});

export const {
  addgroups,
  addconditions,
  addsubconditions,
  addconditonsvalues,
  deleteGroups,
  deleteconditions,
  makegroupconditionsEmpty,
  makegroupconditionsFill,
} = groupconditionSlice.actions;
export default groupconditionSlice.reducer;
