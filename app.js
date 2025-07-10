require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.static('public'));

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Requests routes
const requestsRoutes = require('../routes/requests');
app.use('/api/requests', requestsRoutes);

// Auth routes
const authRoutes = require('../routes/auth');
const authGoogleRoutes = require('../routes/authGoogle');
const profileRoutes = require('../routes/profile');
const adminRoutes = require('../routes/admin');

app.use('/api/auth', authRoutes);
app.use('/api/auth/google', authGoogleRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
