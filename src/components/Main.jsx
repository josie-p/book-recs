import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, ChooseCategories, Romance, FinalRec, Fantasy } from "./";

const Main = () => {
    return(
        <div id="main">
            <Navbar />
            <Routes>
                <Route
                exact 
                path="/"
                element={
                    <Home/>
                }
                />
                <Route exact path="/choose-categories" element={<ChooseCategories/>} />
                <Route exact path="/romance" element={<Romance/>} />
                <Route exact path="/fantasy" element={<Fantasy/>} />
                <Route exact path="/your-recommendation" element={< FinalRec/>}/>
            </Routes>
        </div>
    )
}

export default Main