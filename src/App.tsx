import React, { useState } from 'react';
import './App.css';
import { InputField } from './components/InputField';
import { Todo } from './model';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todosArr, setTodosArr] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodosArr([...todosArr, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  }

  return (
    <div className="App">
      <span className='heading'>TODO APP</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todosArr={todosArr} setTodosArr={setTodosArr} />
    </div>
  );
}

export default App;
