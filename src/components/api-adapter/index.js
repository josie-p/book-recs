const BASE_URL = "https://www.googleapis.com/books/v1"
// const API_KEY = "AIzaSyCOrX_yc8s1wxOdLJzeiqYogEUuIuKTfFk";
// ?q=flowers+inauthor:keyes&key=AIzaSyCOrX_yc8s1wxOdLJzeiqYogEUuIuKTfFk

export const listSomeDataAPI = async(subjectArr) => {

    let subjectStr = "";

    // if(subjectArr.length > 1){
    //      subjectStr = subjectArr.join("+");
    // }
    //  if(subjectArr.length === 1){
    //  subjectStr = subjectArr[0];
    // }

    /*
    - what i want to happen is that we get to look at the subject array and see its length.
    - if the length of the array is greater than one, meaning there are more than one terms in the array, I don't want to 
      join the word together with plus signs
    - if the length of the array is greater than one, meaning there are more than one terms in the array, I'd like to join those 
      terms into a string separated by plus signs
    - once the string is joined, I want to pass it to the api call.
    */

    let tempStr = "";    

    console.log(subjectArr.length, subjectArr,  "length of the subject arr before anything happens to it")

    //if the array has more than one term in it, join the terms together in a string
    if(subjectArr.length > 1){
       tempStr = subjectArr.join("+");

       console.log(tempStr, "the string was joined!")
    }

    //if the array only has one term in it
    if(subjectArr.length === 1){
        tempStr = subjectArr[0];

        console.log(tempStr, "the arr only has one value");
    }

    if(tempStr !== ""){
        subjectStr = tempStr;
    }

    console.log(subjectStr, "subject string before api call!");

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${subjectStr}+subject&maxResults=40&key=AIzaSyCOrX_yc8s1wxOdLJzeiqYogEUuIuKTfFk`, 
        {
            method: "GET", 
            headers: {
                "Content-Type": "application/json", 
            },
        }
    );

    const result = await response.json();

    console.log(result, "result from api call");

    console.log(subjectStr, "the subjectString");

    return result;
}

