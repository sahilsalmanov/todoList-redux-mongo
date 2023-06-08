const express = require('express');
const {booksRoute, tasksRoute } = require('./routes/tasksRoute');
const { default: mongoose } = require('mongoose');
const app = express();
const cors = require('cors');
const { db } = require('./config/db');
require('dotenv').config()

db.connect();

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json())

app.use('/api/tasks', tasksRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
