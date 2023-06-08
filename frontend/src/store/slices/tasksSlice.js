import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    filteredTasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(), 
        name: action.payload.task,
        completed: false,
      };
      state.tasks.push(newTask);
      state.filteredTasks = state.tasks; 
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload.id);
      state.filteredTasks = state.filteredTasks.filter(
        (item) => item.id !== action.payload.id
      );
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((item) => item.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    showAllTasks: (state) => {
      state.filteredTasks = state.tasks; 
    },
    showActiveTasks: (state) => {
      state.filteredTasks = state.tasks.filter((task) => !task.completed); 
    },
    showCompletedTasks: (state) => {
      state.filteredTasks = state.tasks.filter((task) => task.completed); 
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleTask,
  showAllTasks,
  showActiveTasks,
  showCompletedTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
