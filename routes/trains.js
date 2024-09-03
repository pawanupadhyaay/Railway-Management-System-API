const express = require('express');
const auth = require('../middlewares/auth');
const Train = require('../models/Train');

const router = express.Router();

// Add a new train (Admin Only)
router.post('/add', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });

  const { trainNumber, source, destination, totalSeats } = req.body;

  try {
    let train = await Train.findOne({ where: { trainNumber } });
    if (train) return res.status(400).json({ msg: 'Train already exists' });

    train = await Train.create({ trainNumber, source, destination, totalSeats, availableSeats: totalSeats });
    res.status(201).json({ msg: 'Train added successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
