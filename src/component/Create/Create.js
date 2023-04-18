import React from 'react';
import { useState } from 'react';
import { useDispatch} from "react-redux";
import { submitForm, unvalidForm, validForm, checkValidForm } from "../../redux/actions"
import "./Create.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {states} from "../../data/states";
import Modal from "wissal_modal/dist/Modal"


//***************Gestion des listes dropdown************
const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]

let tabStatesFilter = [];

const statesFilter= (states) => {
    states.map(state => (
        tabStatesFilter.push(state.name)
    ))
    return tabStatesFilter;
}
const statesName= statesFilter(states)

//****************************************************** 

//***************Gestion des datePicker***************** 

function formatDate(date) {
    const dateNew = new Date(date)
    const dateISO = dateNew.toISOString().split("T")[0]
    const [year, month, day] = dateISO.split(".")

    return [month, day,year].join("")
}

//********************************************************

let item = []


function CreateEmployee() {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [birth, setBirth] = useState(new Date())
    const [start, setStart] = useState(new Date())
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [code, setCode] = useState("")
    const [department, setDepartment] = useState("")

    const dispatch = useDispatch()

    item = {
    "first": first.toLocaleLowerCase(),
    "last": last.toLocaleLowerCase(),
    "birth": formatDate(birth),
    "start": formatDate(start),
    "street": street.toLocaleLowerCase(),
    "city": city.toLocaleLowerCase(),
    "state": state.label,
    "code": code,
    "department": department.label,
    }

    const checkForm = () => {
        if((first === '') || (last === '')){
            dispatch(unvalidForm())
        }else{
            dispatch(validForm())
        }
    }
    const [modal, setModal] = useState(false);

    const saveEmployee = async (e) => {
        e.preventDefault();
        checkForm();
        const submit =  dispatch(checkValidForm())

        if(submit){
            dispatch(submitForm(item))
        }else{
            return false
        }
        setModal(true)
    }
    const closeModal = () => {
        document.getElementById("formulaire").reset()
        setModal(false)
        setBirth(new Date())
        setStart(new Date())
    } 
        return(
            <>
                <form  id="formulaire">
                    <section className='employee'>

                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first" name="first" onChange={(e) => setFirst(e.target.value)}/>

                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last" name="last" onChange={(e) => setLast(e.target.value)} />



                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <DatePicker name="birth" selected={birth} onChange={setBirth}  value={birth} />


                        <label htmlFor="start-date">Start Date</label>
                        <DatePicker name="start" selected={start} onChange={setStart} value={start} />

                    </section>

                    <section className='adresse'>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" name="street" onChange={(e) => setStreet(e.target.value)} />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" name="city" onChange={(e) => setCity(e.target.value)} />

                        <label htmlFor="state">State</label>
                        <Dropdown placeholder="Select an option"  name="stateList" options={statesName}  onChange={setState} />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="text" name="code" onChange={(e) => setCode(e.target.value)} />
                    </section>

                    <section className='department'>
                        <Dropdown  placeholder="Departments" name="departments"  options={departments} onChange={setDepartment} />
                    </section>
                </form>

                <div className="button-save">
                        <button  onClick={saveEmployee}> Save </button>
                        {modal && <Modal message={"employee successfully created"} closeModale={closeModal}/> }
                </div>

                </>
        );
}

export default CreateEmployee