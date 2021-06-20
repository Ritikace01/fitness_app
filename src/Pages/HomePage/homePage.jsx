import React, {useState} from 'react';
import './homePage.css';

// Components
import Navbar from '../../Components/Navbar/navbar';
import SideMenu from '../../Components/SideMenu/sideMenu';
import Body from '../../Components/Body/body';

export default function HomePage() {
    const [display, setDisplay] = useState(true);

    const handleDisplay = async () => {
        if(display === true) await setDisplay(false);
        else await setDisplay(true);
        console.log("Display value : ", display); 
    }

    return (
        <React.Fragment>
            <Navbar
            handleDisplay={handleDisplay}/>
            <div className="content"
            style={{ gridTemplateColumns: display === false ? "100%" : "15% 85%"}}>
                <SideMenu 
                className="side-menu"
                display={display}/>
                <Body/>
            </div>
        </React.Fragment>
    )
}