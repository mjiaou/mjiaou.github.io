import './App.css';
import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage.js';
import NavigationBar from './components/NavigationBar.js';

const App = () => {   
    return (
        <div>
        <NavigationBar></NavigationBar>
        <HomePage></HomePage>
        </div>
        // <BrowserRouter>            
        //             <Routes>
        //                 <Route path="/" exact component={HomePage} />
        //             </Routes>
        // </BrowserRouter>
    )
}

export default App