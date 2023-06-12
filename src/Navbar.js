import React from 'react';
import './Navbar.css'


function Navbar() {
    return (
        <nav>
            <ul>
                <li> NTU Calendar Converter</li>
                <li> <a href = '/'>Home</a> </li>
                <li> <a href = '/HowToUse'> How To Use</a> </li>
                <li> <a href = '/PrivacyPolicy'> Privacy Policy</a> </li>
                <li> <a href = '/ReportAnIssue'> Report An Issue</a> </li>
            </ul>

        
        </nav>
    )
}

export default Navbar