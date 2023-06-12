import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import HowToUse from './HowToUse.js';
import PrivacyPolicy from './PrivacyPolicy.js';
import ReportAnIssue from './ReportAnIssue.js';





function App() {

  return (

        <BrowserRouter>
            <Routes>
             <Route index element = {<Home />} />
             <Route path = '/home' element = {<Home />} />
             <Route path = '/HowToUse' element = {<HowToUse />} />
             <Route path = '/PrivacyPolicy' element = {<PrivacyPolicy />} />
             <Route path = '/ReportAnIssue' element = {<ReportAnIssue />} />
            </Routes>
        </BrowserRouter>

  );
}

export default App;
