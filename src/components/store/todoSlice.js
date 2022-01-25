import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    "todo/fetchTodos",
    async function(_, { rejectWithValue }) {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            if(!response.ok){
                throw new Error("Can't occured . Server error");
            }
            const data = await response.json();
            return data;

        } catch(error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteTodo = createAsyncThunk(
    "todo/deleteTodo",
    async function(id, { rejectWithValue, dispatch }){
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: "DELETE",
            });
            console.log(response);
            if(!response.ok){
                throw new Error("Can't delete");
            }
            dispatch(removeTodo({ id }));
            
        } catch(error) {
            return rejectWithValue(error.message);
        }
    },
);

export const toggleStatusTodo = createAsyncThunk(
    "todo/toggleStatusTodo",
    async function(id, {rejectWithValue, dispatch, getState }) {
        const todo = getState().todo.todo.find(todo => todo.id === id);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    completed: !todo.completed,
                })
            });
            if(!response.ok){
                throw new Error("Can't toggle status");
            }
            dispatch(toggleTodoComplete({id}));

        } catch(error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addNewTodo = createAsyncThunk(
    "todo/addNewTodo",
    async function(title, { rejectWithValue, dispatch }) {
        try {
            const todo = {
                title: title,
                completed: false,
                userId: 1,
                id: new Date().toISOString(),
            };
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(todo),
            });
            if(!response.ok){
                throw new Error("Can't add todo");
            }
            const data = await response.json();
            console.log(data)
            dispatch(addTodo(data));

        } catch(error) {
            return rejectWithValue(error.message);

        }
    }
);

const setError = (state, action) => {
    state.status = "Rejected";
    state.error = action.payload;
};

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todo.push(action.payload)
        },
        removeTodo(state, action) {
            state.todo = state.todo.filter(todo => todo.id !== action.payload.id )
        },
        toggleTodoComplete(state, action) {
            const toggledTodo = state.todo.find(todo => todo.id === action.payload.id );
            toggledTodo.completed = !toggledTodo.completed;
        }
    },
    extraReducers: {
        [fetchTodos.panding]: (state, action) => {
            state.status = "Loading";
            state.error = null;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = "Resolved";
            state.todo = action.payload;
        },
        [fetchTodos.rejected]: setError,
        [deleteTodo.rejected]: setError,
        [toggleStatusTodo.rejected]: setError,
        [addNewTodo.rejected]: setError,
    }
});

const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;