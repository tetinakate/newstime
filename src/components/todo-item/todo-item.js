import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../store/todoSlice";
import "./todo-item.css";

export const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    return(
        <li>
            <input type="checkbox" 
                   checked = {completed}
                   onChange = {() => dispatch(toggleStatusTodo(id))} 
            />
            <span>{ title }</span>
            <span className="delete" onClick={() => dispatch(deleteTodo(id))}>&times;</span>

        </li>
    )
    
}