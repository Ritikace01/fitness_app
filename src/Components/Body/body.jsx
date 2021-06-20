import React from 'react';
import './body.css';

// Components
import Running from '../../Images/running.jpg';
import Eating from '../../Images/eating.jpg';
import Yoga from '../../Images/yoga.jpg';
import Drink from '../../Images/drink.jpg';

export default function Body() {
    return (
        <div className="main">
            <div className="daily-monitoring">
                <p>Daily Monitoring</p>
                <p style={{color: "grey", fontSize: "16px"}}>
                    See Progress
                    <i className="fas fa-chevron-right" style={{ marginLeft: "10px"}}/>
                </p>
            </div>
            {/* Daily Monitoring */}
            <div className="cards-1">
                <div className="card-1">
                    <div className="circle" style={{ background: "#DEF7E7"}}>
                        <i className="fas fa-apple-alt apple-1"/>
                    </div>
                    <div className="text">
                        <p style={{ fontWeight: "600", fontSize: "15px"}}>Calories</p>
                        <br/>
                        <p style={{ fontWeight: "500", fontSize: "22px"}}>2814</p>
                        <p style={{ fontWeight: "600", fontSize: "13px", color: "#BBB8B2"}}>DAILY AVERAGE</p>
                    </div>
                </div>
                <div className="card-1">
                    <div className="circle" style={{ background: "#EED2E7"}}>
                        <i className="fas fa-shoe-prints"/>
                    </div>
                    <div className="text">
                        <p style={{ fontWeight: "600", fontSize: "15px"}}>Steps</p>
                        <br/>
                        <p style={{ fontWeight: "500", fontSize: "22px"}}>7234</p>
                        <p style={{ fontWeight: "600", fontSize: "13px", color: "#BBB8B2"}}>DAILY AVERAGE</p>
                    </div>
                </div>
                <div className="card-1">
                    <div className="circle" style={{ background: "#DDF2F8"}}>
                        <i className="fas fa-dumbbell"/>
                    </div>
                    <div className="text">
                        <p style={{ fontWeight: "600", fontSize: "15px"}}>Workout</p>
                        <br/>
                        <p style={{ fontWeight: "500", fontSize: "22px"}}>
                            1 
                            <span className="hour"> h </span> 
                            23 
                            <span className="minute"> min</span> 
                        </p>
                        <p style={{ fontWeight: "600", fontSize: "13px", color: "#BBB8B2"}}>ACTIVE</p>
                    </div>
                </div>
                <div className="card-1">
                    <div className="circle" style={{ background: "#FCE4DA"}}>
                        <i className="fas fa-moon"></i>
                    </div>
                    <div className="text">
                        <p style={{ fontWeight: "600", fontSize: "15px"}}>Sleep</p>
                        <br/>
                        <p style={{ fontWeight: "500", fontSize: "22px"}}>
                            7 
                            <span className="hour"> h </span> 
                            35 
                            <span className="minute"> min</span> 
                        </p>
                        <p style={{ fontWeight: "600", fontSize: "13px", color: "#BBB8B2"}}>IN AVERAGE</p>
                    </div>
                </div>
            </div>
            {/* Challenges & Daily Tips */}
            <div className="cards-2">
                <div>
                    <p>Challenges</p>
                    <div className="card-2">
                        <i className="fas fa-apple-alt" style={{ color: "#613DC1", marginRight: "15px"}}/>
                        <span className="card-2-heading"
                        style={{ color: "#613DC1", fontSize: "22px", fontWeight: "600"}}>Early Morning Smoothie</span>
                        <p className="card-2-content" 
                        style={{ padding: "10px", fontSize: "15px", fontWeight: "600"}}>
                            Start your day with energy. For breakfast, prepare a <br/>
                            powerful and healthy smoothi rich in potassium and <br/>
                            vitamin C. It will boost your metabolism.
                        </p>
                        <h3 className="card-2-recipe" 
                        style={{ padding: "10px", fontSize: "18px"}}>RECIPE</h3>
                        <div className="recipe">
                            <ul className="recipe-items" 
                            style={{ paddingLeft: "25px", fontSize: "15px"}}>
                                <li>130g Banana</li>
                                <li>1 whole kiwi</li>
                                <li>250 ml orange juice</li>
                                <li>3 spoons of yogurt</li>
                            </ul>
                            <div className="vertical"></div>
                            <h1 className="cal" style={{ padding: "24px"}}>420 cal</h1>
                        </div>
                        <div className="buttons">
                                <button className="btn-1">ADD CHALLENGE</button>
                                <button className="btn-2">CHALLENGE FRIEND</button>
                            </div>
                    </div>
                </div>
                <div>
                    <div className="daily-monitoring">
                        <p>Daily Tips</p>
                        <p style={{color: "grey", fontSize: "16px"}}>
                            See All
                            <i className="fas fa-chevron-right" style={{marginLeft: "10px"}}/>
                        </p>
                    </div>
                    <div className="card-3">
                        <h4>Mindfulness</h4>
                        <p style={{ fontSize: "14px", color: "gray"}}>
                            Do one hour yoga to improve your body <br/>
                            balance, flexibility and strength.
                        </p>
                        <span style={{ 
                            display: "flex", 
                            fontSize: "14px", 
                            marginTop: "10px", 
                            color: "#33EBBA", 
                            fontWeight: "600",
                            }}>
                            <i className="fas fa-chevron-right" style={{ paddingRight: "10px", verticalAlign: ""}}/>
                            Find out more
                        </span>
                        <hr className="line-break-2"/>
                        <h4>Get more of your day</h4>
                        <p style={{ fontSize: "14px", color: "gray"}}>
                            Wake up 40 mins before the usual and go for a
                            morning walk in the park.
                        </p>
                        <span style={{ 
                            display: "flex", 
                            fontSize: "14px", 
                            marginTop: "10px", 
                            color: "#33EBBA", 
                            fontWeight: "600",
                            }}>
                            <i className="fas fa-chevron-right" style={{ paddingRight: "10px", verticalAlign: ""}}/>
                            Find out more
                        </span>
                        <hr className="line-break-2"/>
                        <h4>Early Bedtime</h4>
                        <p style={{ fontSize: "14px", color: "gray"}}>
                            Go to sleep more at the same hour every night
                        </p>
                        <span style={{ 
                            display: "flex", 
                            fontSize: "14px", 
                            marginTop: "10px", 
                            color: "#33EBBA", 
                            fontWeight: "600",
                            }}>
                            <i className="fas fa-chevron-right" style={{ paddingRight: "10px", verticalAlign: ""}}/>
                            Find out more
                        </span>
                    </div>
                </div>
            </div>
            {/* Recommended Challenges */}
            <div className="daily-monitoring" style={{marginTop: "30px"}}>
                <p>Recommended Challenges</p>
                <p style={{color: "grey", fontSize: "16px"}}>
                    See All
                    <i className="fas fa-chevron-right" style={{ marginLeft: "10px"}}/>
                </p>
            </div>
            {/* Daily Monitoring */}
            <div className="cards-1">
                <div className="recommend">
                    <img src={Running} className="img"/>
                    <i class="fas fa-plus-circle plus"></i>
                    <div className="overlay-content">
                        <div className="circle" 
                        style={{
                            background: "#DDF2F8", 
                            width: "46px", 
                            height: "40px",
                            borderRadius: "20%"}}>
                            <i className="fas fa-dumbbell" style={{ fontSize: "20px"}}/>
                        </div>
                        <div style={{ textAlign: "center"}}>
                            <p style={{ color: "whitesmoke", fontWeight: "600", fontSize: "14px"}}>High Intensity Training</p>
                            <p style={{ color: "white", fontSize: "14px"}}>Running in the nature</p>
                        </div>
                    </div>
                </div>
                <div className="recommend">
                    <img src={Eating} className="img"/>
                    <i class="fas fa-plus-circle plus"></i>
                    <div className="overlay-content">
                        <div className="circle"
                        style={{
                            background: "#DEF7E7", 
                            width: "46px", 
                            height: "40px",
                            borderRadius: "20%"}}>
                        <i className="fas fa-apple-alt apple-1"
                        style={{fontSize: "20px"}}/>
                        </div>
                        <div style={{ textAlign: "center"}}>
                            <p style={{ color: "whitesmoke", fontWeight: "600", fontSize: "14px"}}>Colorful evening meals</p>
                            <p style={{ color: "white", fontSize: "14px"}}>Vegetables for better recovery</p>
                        </div>
                    </div>
                </div>
                <div className="recommend">
                    <img src={Yoga} className="img"/>
                    <i class="fas fa-plus-circle plus" ></i>
                    <div className="overlay-content">
                        <div className="circle" 
                        style={{
                            background: "#EED2E7", 
                            width: "46px", 
                            height: "40px", 
                            borderRadius: "20%"}}>
                            <i className="fas fa-shoe-prints"
                            style={{fontSize: "20px"}}/>
                        </div>
                        <div style={{ textAlign: "center"}}>
                            <p style={{ color: "whitesmoke", fontWeight: "600", fontSize: "14px"}}>Meditate for 5 mins</p>
                            <p style={{ color: "white", fontSize: "14px"}}>Train your mind</p>
                        </div>
                    </div>
                </div>
                <div className="recommend">
                    <img src={Drink} className="img"/>
                    <i class="fas fa-plus-circle plus" ></i>
                    <div className="overlay-content">
                        <div className="circle"
                        style={{
                            background: "#FCE4DA", 
                            width: "46px", 
                            height: "40px",
                            borderRadius: "20%"}}>
                            <i className="fas fa-moon"
                            style={{fontSize: "20px"}}></i>
                        </div>
                        <div style={{ textAlign: "center"}}>
                            <p style={{ color: "whitesmoke", fontWeight: "600", fontSize: "14px"}}>Skin Hydration</p>
                            <p style={{ color: "white", fontSize: "14px"}}>Drink Spinach Smoothie</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}