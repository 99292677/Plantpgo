const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const itineraryRoutes = require('./routes/itineraryRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/itinerary', itineraryRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});