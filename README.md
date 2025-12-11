# Daily Expense Tracker

A modern, full-stack expense tracking application with MongoDB, Express, React, and Node.js (MERN stack).

## Features

- ✅ **Add Expenses**: Create new expense entries with name, amount, date, and category
- ✏️ **Edit Expenses**: Update existing expense details
- 🗑️ **Delete Expenses**: Remove unwanted expenses
- 🔍 **Search**: Find expenses by name
- 📁 **Filter by Category**: Filter expenses by different categories (Food, Transport, Entertainment, etc.)
- 📅 **Date Range Filter**: Filter expenses by date range
- 💰 **Total Calculation**: Automatically calculate total expenses based on filters
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

### Frontend
- **React** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling with gradient backgrounds and modern design

## Project Structure

```
dailyexpense/
├── client/                  # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ExpenseForm.js
│   │   │   ├── ExpenseList.js
│   │   │   └── FilterBar.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── config/
│   └── db.js               # MongoDB connection
├── models/
│   └── Expense.js          # Expense schema
├── routes/
│   └── expenses.js         # API routes
├── .env                    # Environment variables
├── server.js               # Express server
└── package.json
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/expenses` | Get all expenses (supports query filters) |
| GET | `/api/expenses/:id` | Get single expense by ID |
| POST | `/api/expenses` | Create new expense |
| PUT | `/api/expenses/:id` | Update expense by ID |
| DELETE | `/api/expenses/:id` | Delete expense by ID |

### Query Parameters for GET `/api/expenses`
- `search` - Search by expense name
- `category` - Filter by category
- `startDate` - Filter by start date
- `endDate` - Filter by end date

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)

### Steps

1. **Install backend dependencies**
```bash
npm install
```

2. **Install frontend dependencies**
```bash
cd client
npm install
cd ..
```

3. **Configure environment variables**
Create a `.env` file in the root directory:
```
MONGO_URI=mongodb://localhost:27017/dailyexpense
PORT=5000
```

4. **Start MongoDB**
Make sure MongoDB is running on your system.

5. **Run the application**

For development (both servers):
```bash
npm run dev:full
```

Or run separately:
```bash
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend
npm run client
```

6. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Usage

1. **Add an Expense**: Fill out the form with expense details and click "Add Expense"
2. **Edit an Expense**: Click the ✏️ button on any expense, modify details, and click "Update Expense"
3. **Delete an Expense**: Click the 🗑️ button and confirm deletion
4. **Search**: Type in the search box to filter expenses by name
5. **Filter by Category**: Select a category from the dropdown
6. **Filter by Date**: Select start and/or end dates to view expenses in a specific range
7. **View Total**: The total expense amount updates automatically based on filters

## Categories

The app supports the following expense categories:
- 🍔 Food
- 🚗 Transport
- 🎬 Entertainment
- 💡 Utilities
- 🏥 Healthcare
- 🛒 Shopping
- 📚 Education
- 📌 Other

## Database Schema

```javascript
{
  name: String,          // Expense name (required)
  amount: Number,        // Amount in dollars (required, min: 0)
  date: Date,            // Expense date (required, default: now)
  category: String,      // Category from predefined list (required)
  createdAt: Date        // Timestamp (auto-generated)
}
```

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

ISC
