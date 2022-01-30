import React from "react";
import { RandomPost } from "../../random-post";

import "./main.css";

export const Main = () => {
    const date = (new Date()).getFullYear();
    const skills = ["JavaScript", "React", "Git"];
    

    return(
        <div className="container-block">
            <WhoAmI name="Kate" age={() => {return date - 1992} } skills={skills.join(", ")}  />
            <RandomPost />
        </div>
    )
}
function WhoAmI({ name, age, skills }) {
    return(
        <div className="main-page">
            <h1>Hello world!</h1>
            <div>My name is {name}, I am {age()} years old. I learn {skills}! </div>
            
        </div>
    )
}