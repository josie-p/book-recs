import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { listSomeDataAPI } from "./api-adapter";
import listData from "./";

const Home = () => {
    const [theData, setTheData] = useState({});
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const getTheData = async() => {
        const response = await listSomeDataAPI();
        console.log(response, "this is the response i got!");
        setTheData(response.volumeInfo);
        loopThrough();
        setCategories(response.volumeInfo.categories)
        // loopThrough();
    }

    const loopThrough = () => {
        if(categories.length){
            for(let i = 0; i < categories.length; i++){
                console.log(categories[i], `category at idx ${i}`);
            }
        }else{
            console.log("nothing there yet!")
        }
    }

    console.log(categories, "categories from home!")

    loopThrough();

    return(
        <div>
            {/* <h1>let's find some books!</h1>
            <button onClick={() => {
                getTheData();
            }}>click here for info</button>
             <p>here's a test!</p>
            {
                theData ?
                <div>
                 <p>there's length to the data</p>  
                {
                    categories?.length ? 
                    categories.map((category, idx) => {
                        return <p key={`key of category map at idx ${idx}`}>category at ${idx} index: {category} </p>
                    }) : <p>no categories, buddy!</p>
                }
               </div>
                 : <p>there's not length to the data</p>
            }   
             */}

        <p>discover your next good read!</p>
        <button onClick={() => {
            navigate("/choose-categories")
        }}>see more!</button>

        </div>
    )
}

export default Home;