const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
const productRoutes = require('./routes/productRoutes');
const emergencyRoutes = require('./routes/emergencyRoutes');
const activityRoutes = require('./routes/activityRoutes');

app.use('/api/products', productRoutes);
app.use('/api/emergency', emergencyRoutes);
app.use('/api/activities', activityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
