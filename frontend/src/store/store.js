
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/tasksSlice";

export default configureStore({
    reducer:{
        tasks: taskReducer,
    }
});