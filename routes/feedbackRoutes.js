const express = require('express');
const router = express.Router();
const { createFeedback, getFeedbacks } = require('../controllers/feedbackController');

// Public routes - no authentication required
router.post('/', createFeedback);
router.get('/', getFeedbacks);

module.exports = router;
