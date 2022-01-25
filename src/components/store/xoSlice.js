import { createSlice } from "@reduxjs/toolkit";

const xoSlice = createSlice({
    name: "xoGame",
    initialState: {
        gamerName: "X",
        winnerInfo: "",
        restartGame: false
    },
    reducers: {
        turnPlayer(state, action){
            switch(state.xoGame.gamerName){
                case "X":
                    action.event.target.value = "X";
                    state.xoGame.gamerName("O");

                break;
                case "O":
                    action.event.target.value = "O";
                    state.xoGame.gamerName("X");
                    break;
                default:
                    return null;
            }
        },
        
    }

});