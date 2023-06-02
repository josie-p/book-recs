import React, { useState } from "react";

const FantasyTest = () => {

    const initArray = ["fantasy"]

    const [subjects, setSubjects] = useState(initArray);

    const changeSubjects = (term) => {

        console.log("array before anything happens to it!", subjects);

        //check whether or not array already includes the term:
        const checkIfExists = subjects.includes(term);

        //if subjects includes the term, remove the term from the array; if not, add it to the array:
        if(!checkIfExists){

            const newArray = [term, ...subjects];
            setSubjects(newArray);
            console.log("this is the array with the term added", subjects);

        }else{
            const filteredArray = subjects.filter((el) => {
                return el !== term;
            })

            console.log("filteredArr", filteredArray);

            setSubjects(...filteredArray);

            console.log("new subjects array after filter", subjects);
        }

    }

    return (
        <div>
            <h1>fantasy 2</h1>
            <button onClick={() => {
                   
                    changeSubjects("high");
                }}>high fantasy</button>
                <button onClick={() => {
                    changeSubjects("urban");
                }}>urban fantasy</button>
                <button>dark fantasy</button>
                <button>contemporary fantasy</button>
        </div>
    )
}

export default FantasyTest;