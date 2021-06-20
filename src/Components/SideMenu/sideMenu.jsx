import React from 'react';
import './sideMenu.css';

// Components
import TopMenu from '../TopMenu/topMenu';

const dashboard = [
    {
        value: "Overview", 
        icon: " fa-home",
    },
    {
        value: "Daily Plan",
        icon: " fa-calendar-check",
    },
    {
        value: "Progress",
        icon: " fa-chart-line",
    }
];
const personalTips = [
    {
        value: "Nutrition", 
        icon: "fab fa-nutritionix",
    },
    {
        value: "Sport", 
        icon: "fas fa-futbol",
    },
    {
        value: "Beauty", 
        icon: "fas fa-paint-brush",
    },
    {
        value: "Health", 
        icon: "fas fa-heartbeat",
    },
    {
        value: "Mindfulness",
        icon: "fas fa-spa",
    }
];
const data = [
    {
        value: "Blood", 
        icon: "fas fa-tint",
    },
    {
        value: "DNA", 
        icon: "fas fa-dna",
    },
    {
        value: "Microbiome", 
        icon: "fas fa-recycle",
    },
    {
        value: "Questionnaire",
        icon: "fas fa-clipboard-list",
    },
];

export default function SideMenu(props) {
    const {display} = props;

    return (
        <div style={{padding: "10px", display: display === false ? "none" : ""}}>
            <div className="profile">
                <div class="big-cir"></div>
            </div>
            <p className="profile-content">
                Daily Points
                <br/>
                <span style={{ 
                    fontSize: "23px", 
                    fontWeight: "500", 
                    color: "black"}}>2466</span>
            </p>
            <hr className="line-break-1"/>

            <div className="top-menu">
                <TopMenu overview={dashboard} personal={personalTips} data={data}/>
            </div>

            <div className="items">
                <p>DASHBOARD</p>
                {dashboard.map((item, index) => {
                    return (
                        <p key={index} className="item-list">
                            <i className={`fas${item.icon} icons`}/>
                            {item.value}
                        </p>
                    )
                })}
            </div>
            <div className="items">
            <p>PERSONAL TIPS</p>
                {personalTips.map((item, index) => {
                    return (
                        <p key={index} className="item-list">
                            <i style={{ marginRight: "15px", color: "#BBB8B2"}} className={item.icon}/>
                            {item.value}
                        </p>
                    )
                })}
            </div>
            <div className="items">
                <p>YOUR DATA</p>
                {data.map((item, index) => {
                    return (
                        <p key={index} className="item-list">
                            <i style={{ marginRight: "15px", color: "#BBB8B2"}} className={item.icon}/>
                            {item.value}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}