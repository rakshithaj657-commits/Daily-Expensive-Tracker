# Daily Expense Tracker - Installation Guide

## PREREQUISITES NEEDED:

Your system currently does not have Node.js installed. This project requires:
1. Node.js (JavaScript runtime)
2. MongoDB (Database)

## STEP-BY-STEP INSTALLATION:

### Step 1: Install Node.js (5 minutes)

1. Open your browser and go to: https://nodejs.org/
2. Download the "LTS" version (Long Term Support) - recommended
3. Run the downloaded installer (node-vXX.X.X-x64.msi)
4. Follow the installation wizard:
   - Click "Next"
   - Accept the license agreement
   - Keep default installation path
   - Make sure "Add to PATH" is checked
   - Click "Install"
5. **IMPORTANT**: After installation, CLOSE and REOPEN your terminal/command prompt

### Step 2: Verify Node.js Installation

Open a NEW terminal and run:
```
node --version
npm --version
```

You should see version numbers (like v20.x.x and 10.x.x)

### Step 3: Install MongoDB

**OPTION A - MongoDB Atlas (Recommended - FREE Cloud Database)**
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up for a free account
3. Create a FREE cluster (M0 tier)
4. Click "Connect" -> "Connect your application"
5. Copy the connection string (looks like: mongodb+srv://username:password@cluster.mongodb.net/)
6. Open the .env file in your dailyexpense folder
7. Replace the MONGO_URI line with your connection string

**OPTION B - Install MongoDB Locally**
1. Go to: https://www.mongodb.com/try/download/community
2. Download MongoDB Community Server for Windows
3. Run the installer, use default settings
4. MongoDB will auto-start as a Windows service

### Step 4: Run the Project (After Node.js is installed)

Open a NEW terminal in the dailyexpense folder and run:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies  
cd client
npm install
cd ..

# Start both servers
npm run dev:full
```

### Step 5: Access the Application

Once running, open your browser and go to:
- **Frontend (React App)**: http://localhost:3000
- **Backend (API)**: http://localhost:5000

## QUICK START (After Prerequisites)

If you already have Node.js and MongoDB installed:
```bash
npm install
cd client && npm install && cd ..
npm run dev:full
```

## TROUBLESHOOTING

**"npm is not recognized"**
- Node.js is not installed or not in PATH
- Close and reopen terminal after installing Node.js

**"Cannot connect to MongoDB"**
- Make sure MongoDB is running (if local install)
- Check your .env file has correct MONGO_URI
- For Atlas, make sure you whitelisted your IP address

**Port already in use**
- Change PORT in .env file to a different number
- Or stop the application using that port

## NEED HELP?

After installing Node.js, let me know and I can run all the commands for you automatically!
