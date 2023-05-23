import React, { useState } from "react";

const Fantasy = () => {
    /* 
    okay, so the way i want this to go is this:

    - list sub genres and tropes in little button element type things
    - onclick, unshift specific trope to the array. on every unshift, search the array for that term; if it's there, take it off; if it isn't add it
    - have a button which allows users to submit their entry, with or without specifics- maybe have a blurb about it; array should always have main subject
    - on submit, pass terms to final page
    */

    //subject array:
    const [subjects, setSubjects] = useState(["fantasy"]);

    //function to add/take away from the array:
    const changeSubjects = (term) => {
        // const termExists = subjects.indexOf(term);

        // if(termExists){

        // }

        console.log(subjects, "og subjects array");


        // const checkedArr = subjects.filter((subject) => {
        //     if(subject !== term){
        //         return subject;
        //     }else{
        //         return;
        //     }
        // })


        // console.log(checkedArr, "after arr is filtered; checked array");

        if(!subjects.includes(term)){
            setSubjects(subjects.unshift(term));
        }else{
            //take subject off
        }

        console.log(subjects, "subjects after unshift");

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
                <button>get your recommendation</button>
            </div>
        </div>
    )
}

export default Fantasy;