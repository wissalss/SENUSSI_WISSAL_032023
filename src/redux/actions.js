import { actions } from './reducer'
import { selectEmployees } from '../redux/selector'

export function unvalidForm() {
    return (dispatch) => {
        dispatch(actions.unvalidForm())
    }
}

export function validForm() {
    return (dispatch) => {
        dispatch(actions.validForm())
    }
}

export function checkValidForm() {
    return (dispatch, getState) => {
        const validForm = selectEmployees(getState()).isValidForm
        return validForm
    }
}

export function submitForm(newEmployee) {
    return async (dispatch, getState) => {
        const isFormCorrect = selectEmployees(getState()).isValidForm
        const getEmployees = selectEmployees(getState()).dataEmployee
        if(isFormCorrect){
            dispatch(actions.submit(newEmployee))
            dispatch(actions.addEmployee(getEmployees, newEmployee))
            return true
        }else{
            return false
        }
    }
}