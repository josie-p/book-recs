import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, ChooseCategories } from "./";

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
            </Routes>
        </div>
    )
}

export default Main