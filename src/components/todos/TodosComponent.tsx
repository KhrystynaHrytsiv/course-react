import {useEffect, useState} from "react";
import type {ITodo} from "../../interface/ITodo.ts";
import {getTodos} from "../../service/todo.ts";
import {TodoComponent} from "../todo/TodoComponent.tsx";

const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        getTodos().then(todos => setTodos(todos))
    }, []);
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
            {todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {TodosComponent};