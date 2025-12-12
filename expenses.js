const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// @route   GET /api/expenses
// @desc    Get all expenses
router.get('/', async (req, res) => {
  try {
    const { search, category, startDate, endDate } = req.query;
    let query = {};

    // Search filter
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    // Category filter
    if (category && category !== 'All') {
      query.category = category;
    }

    // Date range filter
    if (startDate || endDate) {
      query.date = {};
      if (startDate) query.date.$gte = new Date(startDate);
      if (endDate) query.date.$lte = new Date(endDate);
    }

    const expenses = await Expense.find(query).sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/expenses/:id
// @desc    Get single expense
router.get('/:id', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/expenses
// @desc    Create new expense
router.post('/', async (req, res) => {
  try {
    const { name, amount, date, category } = req.body;

    const expense = await Expense.create({
      name,
      amount,
      date,
      category
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route   PUT /api/expenses/:id
// @desc    Update expense
router.put('/:id', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json(updatedExpense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route   DELETE /api/expenses/:id
// @desc    Delete expense
router.delete('/:id', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
