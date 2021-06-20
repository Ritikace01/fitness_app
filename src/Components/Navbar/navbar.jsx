import React, { useState } from 'react';
import './navbar.css';

export default function Navbar(props) {
    const {handleDisplay} = props;
    const [className, setClassName] = useState("topnav");

    return (
        <div className={className} id="myTopnav">
            <a href="#home">
                <i onClick={handleDisplay} 
                className="fas fa-chevron-left dashboard-icon" 
                style={{marginRight: "10px"}}/>
                <span className="dashboard">Dashboard</span>
            </a>
            <a href="#search" style={{paddingTop: "6px"}}>
                <input className="searchbar" type="text" placeholder="Type to search"></input>
            </a>
            {/* Collapsible Dropdown Content */}
            <span className="nav-items" style={{ float: "right", display: "flex"}}>
                <a href="#notification">
                    <i className="far fa-bell"/>
                </a>
                <div className="nav-profile"></div>
                <a className="profile-name" href="#name">
                    Ritika Singh
                    <i className="fas fa-chevron-down profile-icon" 
                    style={{marginLeft: "10px", fontSize: "14px"}}/>
                </a>
            </span>
        </div>
    )
}