const BASE_URL = "https://www.googleapis.com/books/v1"
// const API_KEY = "AIzaSyCOrX_yc8s1wxOdLJzeiqYogEUuIuKTfFk";
// ?q=flowers+inauthor:keyes&key=AIzaSyCOrX_yc8s1wxOdLJzeiqYogEUuIuKTfFk

export const listSomeDataAPI = async(subjectArr) => {

    const subjectStr = subjectArr.join("+");

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

