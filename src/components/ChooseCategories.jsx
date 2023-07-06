import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChooseCategories = () => {

    const [genres, setGenres] = useState([]);

    return (
        <div>
            <h1>choose categories page!</h1>
            <div>
                {/* this is where all of the initial, broad subjects are being listed and linked to. */}
                <Link to="/fantasy-test"><button>Fantasy</button></Link>
                {/* <Link to="/fiction"><button>Fiction</button></Link> */}
                {/* <Link to="/graphic-novel"><button>Graphic Novel</button></Link> */}
                <Link to="/mystery"><button>Mystery</button></Link>
                <Link to="/nonfiction"><button>Nonfiction</button></Link>
                <Link to="/romance"><button>Romance</button></Link>
                <Link to="/science-fiction"><button>Science Fiction</button></Link>
                {/* <Link to="/ya"><button>Young Adult Fiction</button></Link> */}
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