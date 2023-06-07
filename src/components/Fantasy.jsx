import React, { useState } from "react";

const Fantasy = () => {
    /* 
    okay, so the way i want this to go is this:

    - list sub genres and tropes in little button element type things
    - onclick, unshift specific trope to the array. on every unshift, search the array for that term; if it's there, take it off; if it isn't add it
    - have a button which allows users to submit their entry, with or without specifics- maybe have a blurb about it; array should always have main subject
    - on submit, pass terms to final page
    */

    let initArray = ["fantasy"]

    //subject array:
    const [subjects, setSubjects] = useState(initArray);

    // setSubjects(subjects.unshift("fantasy"));

    //function to add/take away from the array:
    const changeSubjects = (term) => {
        //try some stuff out with a filter

        // setSubjects(subjects.unshift("fantasy"));

        console.log(subjects, "what's the subjects array look like at the beginning?")

        console.log(Array.isArray(subjects), "type of subjects");

        if(!Array.isArray(subjects)){
            console.log("subjects isn't an array babe")
            setSubjects([initArray]);
            console.log(subjects, Array.isArray(subjects), "subjects type of subjects");
        }

        // const checkIfExists = subjects.includes("high");
        const checkIfExists = subjects.indexOf(term);

        if(checkIfExists === -1){
            //add term to the front of the array
            // setSubjects(subjects.push(term));

            console.log(subjects, "subjects before unshift!");

            // subjects.unshift(term)
            let newArray = [term, ...subjects];
            setSubjects(newArray);

            console.log(subjects, "subjects array if array does not include term!");
        }else{

            console.log("getting to the else statement")

            //get the index of the term:
            const indexOfTerm = subjects.indexOf(term);

            //double check to make sure that the term does exist in the array!
            if(indexOfTerm !== -1 && subjects.includes(term)){
                // take term out of subjects array
                let newArray = [...subjects];
                newArray.splice(indexOfTerm, 1);
                setSubjects(newArray)
                console.log(setSubjects(subjects.slice(indexOfTerm, indexOfTerm + 1)), "if statement in else");
                // setSubjects(subjects.slice(indexOfTerm, indexOfTerm + 1));
            }


            console.log(subjects, "subjects array if the term did exist in the array!");

        }




        // const termExists = subjects.indexOf(term);

        // if(termExists){

        // }

        // console.log(subjects, "og subjects array");


        // const checkedArr = subjects.filter((subject) => {
        //     if(subject !== term){
        //         return subject;
        //     }else{
        //         return;
        //     }
        // })


        // console.log(checkedArr, "after arr is filtered; checked array");

        // if(!subjects.includes(term)){
        //     setSubjects(subjects.unshift(term));
        // }else{
            //take subject off
        // }

        // console.log(subjects, "subjects after unshift");

    }

    return(
        <div>
            <h1>fantasy page!</h1>
            <div>
                {/* sub genres/ tropes */}
                <button onClick={() => {
                    // setSubjects(subjects.unshift("high+fantasy"))
                    changeSubjects("high");
                }}>high fantasy</button>
                <button>urban fantasy</button>
                <button>dark fantasy</button>
                <button>contemporary fantasy</button>
            </div>
            <div>
                <button >get your recommendation</button>
            </div>
        </div>
    )
}

export default Fantasy;