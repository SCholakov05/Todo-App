import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model';
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete, MdDone } from 'react-icons/md'


interface Props {
    todo: Todo;
    todosArr: Todo[];
    setTodosArr: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const SingleTodo: React.FC<Props> = ({ todo, todosArr, setTodosArr }) => {

    const [edit, setEdit] = useState(false);
    const [editTodo, setEditTodo] = useState(todo.todo);

    const onHandleDone = (id: number) => {
        setTodosArr(todosArr.map(todo =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ))
    }
    const onHandleDelete = (id: number) => {
        setTodosArr(todosArr.filter(todo => todo.id !== id));
    }
    const onHandleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodosArr(
            todosArr.map(todo => (
                todo.id === id ?
                    { ...todo, setEdit: true } : todo
            ))
        );
        setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
       return inputRef.current?.focus
    }, [edit])
    

    return (
        <form className='single-todo__form' onSubmit={(e) => onHandleEdit(e, todo.id)}>
            {
                edit ? (
                    <input value={todo.todo} onChange={(e) => setEditTodo(e.target.value)} />
                ) : (
                    todo.isDone ? (
                        <s className='single-todo__span'>{todo.todo}</s>

                    ) : (

                        <span className='single-todo__span'>{todo.todo}</span>
                    )
                )
            }

            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}
                ><AiFillEdit /></span>
                <span className="icon" onClick={() => onHandleDelete(todo.id)}><MdDelete /></span>
                <span className="icon" onClick={() => onHandleDone(todo.id)}><MdDone /></span>
            </div>

        </form>
    )
}
