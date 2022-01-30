import React from "react";
import { FeedbackForm } from "../../feedback-form";

import "./about.css";

export const About = () => {
    return(
        <div className="container-block">
            <h1>О сайте</h1>
            <p>Здесь я практикую свои навыки по JavaScript и React!</p>
            <p>Буду рада обратной связи!</p>
            <FeedbackForm />

            {/* <div className="wrapper">
                    <div className="item">A</div>
                    <div className="item">B</div>
                    <div className="item">C</div>
                    <div className="item">D</div>
                    <div className="item">E</div>
                    <div className="item">F</div>
                </div> 
            */}
        </div>
        
    )
}
