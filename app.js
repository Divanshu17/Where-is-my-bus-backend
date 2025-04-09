const express = require('express');
const app = express();
const feedbackRoutes = require('./routes/feedbackRoutes');

app.use(express.json());
app.use('/api/feedback', feedbackRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;