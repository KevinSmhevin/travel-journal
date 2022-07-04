import React from "react";
import travelIcon from '../images/landscape.png'

export default function Navbar() {
    return (
        <header className="journal-navbar">
            <img src={travelIcon} className="travel-icon" />
            <h2 className="journal-header">Kevin's Travel Journal</h2>
        </header>
    )
}