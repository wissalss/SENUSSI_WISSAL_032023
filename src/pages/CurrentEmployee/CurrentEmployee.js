import React from 'react';
import "./CurrentEmployee.css"
import Current from "../../component/Current/Current"

const CurrentEmployees = () => {
    return (
        <>
        
        <section className='enteteTable'>
            <h2 className='current'>list of employees</h2>
            <Current />
        </section>
        
        </>
    );
};

export default CurrentEmployees;