import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase-config"; 
import { collection, getDocs } from "firebase/firestore";

const finalTest = () => {

    /* this is the code needed to get the books; "whatever-subject" will be replaced with the subject that the user picked 
        then a filter will be applied getting the specific type of book they want and setting those in an array
        then a book will be randomly chosen from the array and displayed!!
    */

    // const [books, setBooks] = useState([]);

    // const booksCollectionRef = collection(db, "whatever-subject");

    // const navigate = useNavigate();

    // useEffect(() => {
    //     const getBooks = async() => {
    //         const data = await getDocs(booksCollectionRef);
    //         setBooks(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    //         console.log(data);
    //     }

    //     getBooks();
    // }, []);

    return (
        <div>
            <h1>this is where the finalrec will go!</h1>
        </div>
    )
}

export default finalTest;