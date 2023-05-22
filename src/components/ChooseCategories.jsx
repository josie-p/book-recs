import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChooseCategories = () => {

    const [genres, setGenres] = useState([]);

    // console.log(document.getElementById("comedy").value, "value of comedy button")
    return (
        <div>
            <h1>choose categories page!</h1>
            <div>
                <Link to="/romance"><button>i need a romance</button></Link>
                <button>i need a mystery</button>
                <button>i need some fantasy</button>
                <button>i need some science fiction</button>
                <button>i need a nonfiction book</button>
                <button value={`comedy`} id="comedy" onClick={() => {
                    // genres.push(document.getElementById("comedy").value);
                }} >i need a good laugh</button>
                {console.log(genres, "genres array")}
            </div>
        </div>
    )
}

export default ChooseCategories;