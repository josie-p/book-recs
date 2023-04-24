import React, { useState } from "react";
import { listSomeDataAPI } from "./api-adapter";
import listData from "./";

const Home = () => {
    const [theData, setTheData] = useState([]);

    const getTheData = async() => {
        const response = await listSomeDataAPI();
        console.log(response, "this is the response i got!");
        setTheData(response.items);
    }

    return(
        <div>
            <h1>let's find some books!</h1>
            <button onClick={() => {
                getTheData();
            }}>click here for info</button>
            { theData.length ? 
                theData.map((el, idx) => {
                    return(
                        <div key={`the unique key for getting the data at idx ${idx}`}>
                            <h1>{el.volumeInfo.title}</h1>
                        </div>
                    )
                }) : "there's nothing, bud!"
            }
               
            
        </div>
    )
}

export default Home;