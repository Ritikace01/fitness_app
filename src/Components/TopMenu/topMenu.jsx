import React, {useState} from 'react';
import './topMenu.css';

export default function TopMenu(props) {
    const {overview, personal, data} = props;

    const [value, setVal] = useState("");


    const handleInfo = async (val) => {
        console.log("Called : ", val);
        if(value === "") await setVal(val);
        else await setVal("");
        console.log("Val : ", value);
    }

    return (
        <div className="topmenu">
            <div className="topmenu-search">
                <input className="search-input" type="text" placeholder="Type here to search..."></input>
            </div>
            <div className="sidemenu-content">
                <div onClick={() => handleInfo("overview")} className="overview">Overview</div>
                <div onClick={() => handleInfo("personal")} className="personal">Personal Tips</div>
                <div onClick={() => handleInfo("data")} className="data">Your Data</div>
            </div>
            <ul className="dropdown" 
            style={{
                display: value === "" ? "none" : "block",
                left: value === "overview" ? "12%" : value === "personal" ? "44%" : "76%"}}>
                    {value === "overview" ? (
                        overview.map((item, index) => {
                            return (
                                <li className="dropdown-item" key={index}>
                                    {item.value}
                                    <i key={index} className={`fas${ item.icon} dropdown-icon`}/>
                                </li>
                            )
                        })
                    ) : (
                        value === "personal" ? (
                            personal.map((item, index) => {
                                return (
                                    <li className="dropdown-item" key={index}>
                                        {item.value}
                                        <i className={`${item.icon} dropdown-icon`}/>
                                    </li>
                                )
                            })
                        ) : (
                            data.map((item, index) => {
                                return (
                                    <li className="dropdown-item" key={index}>
                                        {item.value}
                                        <i className={`${item.icon} dropdown-icon`}/>
                                    </li>
                                )
                            })
                        )
                    )}
                </ul>
        </div>
    )
}