import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from '../store/slices/tasksSlice';

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    dispatch(toggleTask({ id }));
	setCompleted(!completed)
  };

  const removeTask = () => {
    dispatch(deleteTask({ id }));
  };



  return (
    <>
      <li className={completed ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={toggleCompleted}
          />
          <label>{title}</label>
          <button onClick={removeTask} className="destroy"></button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;



