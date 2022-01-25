import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, fetchTodos } from "../../store/todoSlice";
import { TodoItem } from "../../todo-item";
import { AddTodo } from "../../add-todo";
 
import "./todo-list.css";

export const TodoList = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todo);
    const addTodoItem = () => {
        dispatch(addNewTodo(title));
        setTitle('');
    };
    const { status, error } = useSelector(state => state.todo.todo);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch])

    
    return(
        <div className="container-block todo-list">
            <h1>Список дел</h1>
            
            {status === "Loading" && <h2>Загрузка</h2>}
            {error && <h2>An occured error {error}</h2>}

            <AddTodo title={title} handleInput={setTitle} handleAddTodoItem = { addTodoItem } />
            <ul>
                {
                    todos.map(item => {
                        return(
                            <TodoItem id={item.id} title={item.title} completed={item.completed} key={item.id} />
                        )
                    })
                }
                
            </ul>

        </div>
    )
}