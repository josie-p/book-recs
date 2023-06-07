import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FantasyTest = () => {

    const navigate = useNavigate();

    let data = {};

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

    const prepareData = (arr) => {
         if(arr.length >= 1){
             for(let i = 0; i < arr.length; i++){
                 data["subject" + [i]] = arr[i];
             }
         }else if(arr.length === 1){
            data["subject0"] = arr[0];
         }

        console.log(data, "object in prepare data");
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
                <button
                onClick = {() => {
                    prepareData(subjects);
                    console.log(data, "data object")
                    setTimeout(() => {
                        console.log("navigating!");
                        navigate("/your-recommendation", { state: data });
                    }, 3000);
                }}
                >get rec!</button>
        </div>
    )
}

export default FantasyTest;