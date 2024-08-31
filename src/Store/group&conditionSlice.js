import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  groupconditions: []
}
export const groupconditionSlice = createSlice({
  name: 'group&conditionSlice',
  initialState,
  reducers: {
    addgroups: (state) => {
      state.groupconditions.push({ type: 'group', id: nanoid(), subconditions: [{ type: 'subconditions', id: nanoid() }] });
    },
    addconditions: (state) => {
      state.groupconditions.push({ type: 'conditions', id: nanoid() })
    },
    addsubconditions: (state) => {
      state.groupconditions.subconditions.push({ type: 'subcondtions', id: nanoid() })
    }
  }
})

export const { addgroups, addconditions, addsubconditions } = groupconditionSlice.actions;
export default groupconditionSlice.reducer;