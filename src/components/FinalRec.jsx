import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { listSomeDataAPI } from "./api-adapter";


const FinalRec = () => {

    const location = useLocation();
    const data = location.state;

    const [recData, setRecData] = useState([]);

    const getRandNum = () => {
        return Math.floor(Math.random() * 41);
    }

    const getRec = async() => {
        const subjects = Object.values(data);

        const response = await listSomeDataAPI(subjects);

        const randNum = getRandNum();

        const result = response.items[randNum];

        setRecData(result);

        console.log(result, "response from api + keys!")

    }

    useEffect(() => {
        getRec();
    }, [])



    return(
        <div>
            <h1>
                this is where the final recommendation will go!
            </h1>
            {
            Object.values(data).length ? 
            <p>result</p> : <p> no result</p>}
            
            {console.log(recData, Array.isArray(recData) , "recData and is recData an array")};
       
            {
                recData?.volumeInfo?.authors?.length ? 
                <p>{recData.volumeInfo.authors[0]}</p> : <p>I got nothing</p>
            }
        </div>
    )
}

export default FinalRec;