import React, { useState, useRef } from "react";

import "./xo-game.css";

export const XOGame = () => {
    const [gamerName, setGamerName] = useState("X");
    const [winnerInfo, setWinnerInfo] = useState(null);
    const [restartGame, setRestartGame] = useState(false);

    const x1y1 = useRef(null);
    const x1y2 = useRef(null);
    const x1y3 = useRef(null);
    const x2y1 = useRef(null);
    const x2y2 = useRef(null);
    const x2y3 = useRef(null);
    const x3y1 = useRef(null);
    const x3y2 = useRef(null);
    const x3y3 = useRef(null);
    
    const handleClickGame = (event) => {
        if(event.target.value || winnerInfo) {
            return null;
        }
        switch(gamerName){
            case "X":
                event.target.value = "X";
                setGamerName("O");

            break;
            case "O":
                event.target.value = "O";
                setGamerName("X");
                break;
            default:
                return null;
        }
        checkGame();
    };

    const checkCondition = (value1, value2, value3, icon) => value1 === icon && value2 === icon && value3 === icon

    //TODO: подумать над алгоритмом
    const checkGame = () => {
        const x1y1Value = x1y1?.current?.value
        const x1y2Value = x1y2?.current?.value
        const x1y3Value = x1y3?.current?.value
        const x2y1Value = x2y1?.current?.value
        const x2y2Value = x2y2?.current?.value
        const x2y3Value = x2y3?.current?.value
        const x3y1Value = x3y1?.current?.value
        const x3y2Value = x3y2?.current?.value
        const x3y3Value = x3y3?.current?.value

        if (
            checkCondition(x1y1Value, x1y2Value, x1y3Value, "X") || 
            checkCondition(x2y1Value, x2y2Value, x2y3Value, "X") || 
            checkCondition(x3y1Value, x3y2Value, x3y3Value, "X") ||
            checkCondition(x1y1Value, x2y1Value, x3y1Value, "X") ||
            checkCondition(x1y2Value, x2y2Value, x3y2Value, "X") ||
            checkCondition(x1y3Value, x2y3Value, x3y3Value, "X") ||
            checkCondition(x1y1Value, x2y2Value, x3y3Value, "X") ||
            checkCondition(x1y3Value, x2y2Value, x3y1Value, "X")
        ){
            setRestartGame(true);
            setGamerName("");
            return setWinnerInfo("X выиграл!");
        }
        
        if (
            checkCondition(x1y1Value, x1y2Value, x1y3Value, "O") || 
            checkCondition(x2y1Value, x2y2Value, x2y3Value, "O") || 
            checkCondition(x3y1Value, x3y2Value, x3y3Value, "O") ||
            checkCondition(x1y1Value, x2y1Value, x3y1Value, "O") ||
            checkCondition(x1y2Value, x2y2Value, x3y2Value, "O") ||
            checkCondition(x1y3Value, x2y3Value, x3y3Value, "O") ||
            checkCondition(x1y1Value, x2y2Value, x3y3Value, "O") ||
            checkCondition(x1y3Value, x2y2Value, x3y1Value, "O")
        ){
            setRestartGame(true);
            setGamerName("");
           return setWinnerInfo("O выиграл!");
        }
        
        if (x1y1Value && x1y2Value && x1y3Value && x2y1Value && x2y2Value && x2y3Value && x3y1Value && x3y2Value && x3y3Value) {
            setRestartGame(true);
            setGamerName("");
            return setWinnerInfo("Ничья!");
        }

        return null
    }

    const handleClickRestartGame = () => {
        const allInput = document.getElementsByTagName('input');
        for (let input of allInput) {
            input.value = null;
        }
        setWinnerInfo(null);
        setGamerName("X");
        setRestartGame(false);
    }

    return(
        <div className="container-block">
            <h1>Ход игрока: {gamerName} </h1>
            <div className="xo-game-board">
                <input className="x1y1" onClick={handleClickGame} ref={x1y1}></input>
                <input className="x1y2" onClick={handleClickGame} ref={x1y2}></input>
                <input className="x1y3" onClick={handleClickGame} ref={x1y3}></input>
                <input className="x2y1" onClick={handleClickGame} ref={x2y1}></input>
                <input className="x2y2" onClick={handleClickGame} ref={x2y2}></input>
                <input className="x2y3" onClick={handleClickGame} ref={x2y3}></input>
                <input className="x3y1" onClick={handleClickGame} ref={x3y1}></input>
                <input className="x3y2" onClick={handleClickGame} ref={x3y2}></input>
                <input className="x3y3" onClick={handleClickGame} ref={x3y3}></input>

            </div>
            <div className="winner-info">{winnerInfo}</div>
            {restartGame ? <button className="xo-game-restart" onClick={handleClickRestartGame}>Играть сначала</button> : <></>} 
        </div>
    );
}