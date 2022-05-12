import React from "react";
import {Routes, Route } from "react-router-dom";
import {IndexPage, NotFoundPage, AboutPage, ResultsPage, SearchPage } from "./pages";
import {default as Layout} from "./layouts";
import './App.css';

const App = () => {
    return <Routes>
            <Route path="/" element={<Layout />}>                
                <Route path="/">
                    <Route path="/" element={<SearchPage />} />
                    <Route path=":login">
                        <Route path=":name"  element={<ResultsPage />} />
                    </Route>
                </Route>
                <Route path="/about" element={<AboutPage />}/>  
                <Route path="*" element={<NotFoundPage />}/>
            </Route>
           </Routes>
}

export default App;