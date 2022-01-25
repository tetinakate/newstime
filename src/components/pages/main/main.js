import React from "react";
import { RandomPost } from "../../random-post";
import { createStore, bindActionCreators } from "redux";
import * as actions from "./actions";
import { reducer } from "./reducer";
import "./main.css";

export const Main = () => {
    const date = (new Date()).getFullYear();
    const skills = ["JavaScript", "React", "Git"];
    

    return(
        <div className="container-block">
            
            <WhoAmI name="Kate" age={() => {return date - 1992} } skills={skills.join(", ")}  />
            <RandomPost />

            {/* <div>
                <h2 id="counter">0</h2>
                <button id="dec">DEC</button>
                <button id="inc">INC</button>
                <button id="rnd">RND</button>
            </div> */}
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


// const store = createStore(reducer);
// const { dispatch, subscribe, getState } = store;
// const update = () => {
//     document.getElementById("counter").textContent = getState().value;
// }
// const incBut = document.getElementById("inc");
// const decBut = document.getElementById("dec");
// const rndBut = document.getElementById("rnd");

// subscribe(update);
// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
// // const incDispatch = bindActionCreators(inc, dispatch);
// // const decDispatch = bindActionCreators(dec, dispatch);
// // const rndDispatch = bindActionCreators(rnd, dispatch);
// if(incBut){
//     incBut.addEventListener('click', inc);
// }
// if(decBut){
//     decBut.addEventListener('click', dec);
// }
// if(rndBut){
//     rndBut.addEventListener('click', () => {
//         const value = Math.floor(Math.random() * 10);
//         rnd(value);
//     });
// }
// console.log('counter  : ', document.getElementById("counter"))