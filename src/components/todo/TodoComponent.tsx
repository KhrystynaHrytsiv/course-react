import type {ITodo} from "../../interface/ITodo.ts";
import type {FC} from "react";
import css from './Todo.module.css'

interface IProp {
    todo:ITodo
}
const TodoComponent:FC<IProp> = ({todo}) => {
    return (
        <div className={css.todo}>
            <div>id: {todo.id}</div>
            <div>userId: {todo.userId}</div>
            <div>Title {todo.title}</div>
            <div>Complete: {todo.completed ? 'complete': 'not yet'}</div>
        </div>
    );
};

export {TodoComponent};