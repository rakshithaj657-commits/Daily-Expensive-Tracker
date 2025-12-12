import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import FilterBar from './components/FilterBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    fetchExpenses();
  }, []);

  useEffect(() => {
    filterExpenses();
  }, [expenses, searchTerm, selectedCategory, startDate, endDate]);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('/api/expenses');
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const filterExpenses = () => {
    let filtered = [...expenses];

    if (searchTerm) {
      filtered = filtered.filter(expense =>
        expense.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(expense => expense.category === selectedCategory);
    }

    if (startDate) {
      filtered = filtered.filter(expense => new Date(expense.date) >= new Date(startDate));
    }

    if (endDate) {
      filtered = filtered.filter(expense => new Date(expense.date) <= new Date(endDate));
    }

    setFilteredExpenses(filtered);
  };

  const addExpense = async (expenseData) => {
    try {
      const response = await axios.post('/api/expenses', expenseData);
      setExpenses([response.data, ...expenses]);
    } catch (error) {
      console.error('Error adding expense:', error);
      alert('Error adding expense');
    }
  };

  const updateExpense = async (id, expenseData) => {
    try {
      const response = await axios.put(`/api/expenses/${id}`, expenseData);
      setExpenses(expenses.map(expense => 
        expense._id === id ? response.data : expense
      ));
      setEditingExpense(null);
    } catch (error) {
      console.error('Error updating expense:', error);
      alert('Error updating expense');
    }
  };

  const deleteExpense = async (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      try {
        await axios.delete(`/api/expenses/${id}`);
        setExpenses(expenses.filter(expense => expense._id !== id));
      } catch (error) {
        console.error('Error deleting expense:', error);
        alert('Error deleting expense');
      }
    }
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
  };

  const calculateTotal = () => {
    return filteredExpenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>💰 Daily Expense Tracker</h1>
        <p>Track your expenses and manage your budget</p>
      </header>

      <div className="container">
        <ExpenseForm 
          addExpense={addExpense}
          updateExpense={updateExpense}
          editingExpense={editingExpense}
          setEditingExpense={setEditingExpense}
        />

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

        <div className="total-section">
          <h2>Total Expenses: ${calculateTotal()}</h2>
          <p>{filteredExpenses.length} expense(s) shown</p>
        </div>

        <ExpenseList
          expenses={filteredExpenses}
          deleteExpense={deleteExpense}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
