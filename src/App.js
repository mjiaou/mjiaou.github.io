import './App.css';
import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.js';

const App = () => {   
    return (
        <HomePage></HomePage>
        // <BrowserRouter>            
        //             <Routes>
        //                 <Route path="/" exact component={HomePage} />
        //             </Routes>
        // </BrowserRouter>
    )
}

export default App