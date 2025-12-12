const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add an expense name'],
    trim: true
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount'],
    min: [0, 'Amount cannot be negative']
  },
  date: {
    type: Date,
    required: [true, 'Please add a date'],
    default: Date.now
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Food', 'Transport', 'Entertainment', 'Utilities', 'Healthcare', 'Shopping', 'Education', 'Other']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
