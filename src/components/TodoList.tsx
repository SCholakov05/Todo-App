import React from 'react';
import { Todo } from '../model';
import './styles.css'
import { SingleTodo } from './SingleTodo';

interface Props {
    todosArr: Todo[];
    setTodosArr: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<Props> = ({todosArr, setTodosArr}) => {
  return (
    <div className='todos'>
        {
            todosArr.map(todo => (
                <SingleTodo todo={todo} todosArr={todosArr} setTodosArr={setTodosArr}/>
            ))
        }
    </div>
  )
}
