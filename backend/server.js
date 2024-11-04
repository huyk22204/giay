const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Kết nối đến MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// Khai báo các routes
const shoeRoutes = require('./routes/shoes');
app.use('/api/shoes', shoeRoutes);

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
