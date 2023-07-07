import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, ChooseCategories, Romance, FinalRec, Fantasy, FantasyTest, Contact, finalTest } from "./";

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
                <Route exact path="/fantasy-test" element={<FantasyTest/>} />
                <Route exact path="/your-recommendation" element={< FinalRec/>}/>
                <Route exact path="/contact" element={ <Contact/> } />
                <Route exact path="/finalTest" element={ <finalTest/> } />
            </Routes>
        </div>
    )
}

export default Main