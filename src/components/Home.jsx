import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listSomeDataAPI } from "./api-adapter";
import listData from "./";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

//THERE IS AN EQUALTO FUNCTION INCLUDED IN FIRBASE IF YOU WANT TO QUERY, SO KEEP THAT IN MIND!!!

const Home = () => {
    // const [theData, setTheData] = useState([]);
    const [books, setBooks] = useState([]);

    const booksCollectionRef = collection(db, "fantasy");

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getBooks = async() => {
           const data = await getDocs(booksCollectionRef);
           setBooks(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ))
           console.log(data); 
        //    console.log(books);
        }

        getBooks();
    }, [])

    const getTheData = async() => {
        const response = await listSomeDataAPI(["contemporary", "dark", "romance"]);
        console.log(response, "this is the response i got!");
        setTheData(response);
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
             <h1>let's find some books!</h1>
            <button onClick={() => {
                getTheData();
            }}>click here for info</button>
            {/*
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

        <div>
            {
                books.map((book) => {
                    return <div>
                        <h1>title: {book.title}</h1>
                        <h1> author: {book.author}</h1>
                        <p> description: {book.description}</p>
                        <img src={book.coverURL} alt={`cover of book ` + book.title} />
                    </div>
                })
            }
        </div>

        </div>
    )
}

export default Home;