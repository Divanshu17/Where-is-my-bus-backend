const Feedback = require('../models/Feedback');

exports.createFeedback = async (req, res) => {
  try {
    const { userName, email, contact, category, rating, comment } = req.body;

    const feedback = new Feedback({
      userName,
      email,
      contact,
      category,
      rating,
      comment,
      userId: null // Make userId optional
    });

    await feedback.save();

    res.status(201).json({
      success: true,
      data: feedback,
      message: 'Feedback submitted successfully'
    });
  } catch (error) {
    console.error('Feedback submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting feedback',
      error: error.message
    });
  }
};

exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: feedbacks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching feedbacks',
      error: error.message
    });
  }
};
