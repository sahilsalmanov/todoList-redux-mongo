import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTask,
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
} from '../store/slices/tasksSlice';

function Footer() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const incompleteTasksCount = tasks.length - completedTasksCount;

  const dispatch = useDispatch();

  const clearCompletedTasks = () => {
    const completedTasks = tasks.filter((task) => task.completed);
    completedTasks.forEach((task) => {
      dispatch(deleteTask({ id: task.id }));
    });
  };

  const [activeButton, setActiveButton] = useState('All');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    switch (buttonName) {
      case 'All':
        dispatch(showAllTasks());
        break;
      case 'Active':
        dispatch(showActiveTasks());
        break;
      case 'Completed':
        dispatch(showCompletedTasks());
        break;
      default:
        break;
    }
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{incompleteTasksCount}</strong> items left
      </span>
      <div className="filter">
        <button
          onClick={() => handleButtonClick('All')}
          style={{
            border: activeButton === 'All' ? '1px solid black' : 'none',
            marginRight: '30px',
            cursor: 'pointer',
          }}
        >
          All
        </button>
        <button
          onClick={() => handleButtonClick('Active')}
          style={{
            border: activeButton === 'Active' ? '1px solid black' : 'none',
            marginRight: '30px',
            cursor: 'pointer',
          }}
        >
          Active
        </button>
        <button
          onClick={() => handleButtonClick('Completed')}
          style={{
            border: activeButton === 'Completed' ? '1px solid black' : 'none',
            marginRight: '30px',
            cursor: 'pointer',
          }}
        >
          Completed
        </button>
      </div>
      <button className="clear-completed" onClick={clearCompletedTasks}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;


