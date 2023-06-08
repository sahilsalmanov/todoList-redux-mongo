import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

function Section() {
  const filteredTasks = useSelector((state) => state.tasks.filteredTasks);

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {filteredTasks.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.name} completed={todo.completed} />
        ))}
      </ul>
    </section>
  );
}

export default Section;
