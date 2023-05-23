import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChooseCategories = () => {

    const [genres, setGenres] = useState([]);

    // console.log(document.getElementById("comedy").value, "value of comedy button")
    return (
        <div>
            <h1>choose categories page!</h1>
            <div>
                {/* this is where all of the initial, broad subjects are being listed and linked to. */}
                <Link to="/"><button>Fiction</button></Link>
                <Link to="/"><button>Young Adult Fiction</button></Link>
                <Link to="/"><button>Nonfiction</button></Link>
                <Link to="/"><button>Romance</button></Link>
                <Link to="/"><button>Fantasy</button></Link>
                <Link to="/"><button>Mystery</button></Link>
                <Link to="/"><button>Graphic Novel</button></Link>
                <Link to="/"><button>Science Fiction</button></Link>
                {console.log(genres, "genres array")}
            </div>
        </div>
    )
}

export default ChooseCategories;


{/* <Link to="/romance"><button>i need a romance</button></Link>
<Link to="/mystery" ><button>i need a mystery</button></Link>
<Link to="/fantasy"><button>i need some fantasy</button></Link>
<Link to="/sci-fi"><button>i need some science fiction</button></Link>
<Link to="/nonfiction"><button>i need a nonfiction book</button></Link> */}
{/* <button value={`comedy`} id="comedy" onClick={() => { */}
    {/* // genres.push(document.getElementById("comedy").value); */}
{/* // }} >i need a good laugh</button> */}