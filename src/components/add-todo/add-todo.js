import React from "react";

import "./add-todo.css";

export const AddTodo = ({ title, handleInput, handleAddTodoItem  }) => {
    return(
        <div className="add-todo">
            <input type="text" value = { title } placeholder="" onChange={(e) => handleInput(e.target.value)} />
            <button onClick={handleAddTodoItem}>Добавить</button>
        </div>
    )
}