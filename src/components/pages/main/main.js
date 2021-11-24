import React from "react";


export const Main = () => {
    const date = (new Date()).getFullYear();
    const skills = ["JavaScript", "React", "Git"];
    return(
        <div className='main-page'>
            
            <WhoAmI name="Kate" age={() => {return date - 1992} } skills={skills.join(", ")}  />
        </div>
    )
}
function WhoAmI({ name, age, skills }) {
    return(
        <div>
            <h1>Hello world!</h1>
            <div>My name is {name}, I am {age()} years old. I learn {skills}! </div>
            
        </div>
    )
}