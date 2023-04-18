import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataEmployee : [],
    isValidForm : false 
}
const { actions, reducer } = createSlice({
    name: 'form',
    initialState,
    reducers : {
        submit: (draft, action) => {
            draft.dataEmployee = action.payload
            return         
        },
        unvalidForm: (draft, action) => {
            draft.isValidForm = false
            return
        },
        validForm: (draft, action) => {
            draft.isValidForm = true
            return
        },
        addEmployee: {
            prepare: (data, newEmployee) => ({ payload: { data, newEmployee } }),
            reducer: (draft, action) => {
                draft.dataEmployee = [ ...action.payload.data, action.payload.newEmployee]
            }        
        },
    }
});

export { actions }
export default reducer