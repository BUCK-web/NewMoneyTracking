# Personal Expense Tracker Backend

This is the backend service for the **Personal Expense Tracker** web application. It provides RESTful APIs for managing users and their expenses securely using JWT authentication.

## 🔧 Tech Stack

### 📦 Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **JWT** – For secure user authentication
- **bcryptjs** – For password hashing
- **dotenv** – For environment variables
- **CORS** – Middleware to handle cross-origin requests

## 📁 Project Structure
```
expense-tracker-backend/
│
├── index.js                # Entry point
├── .env                   # Environment variables
├── models/                # Mongoose models
│   ├── user.model.js
│   └── expense.model.js
├── routes/                # Express routes
│   ├── user.routes.js
│   └── expense.routes.js
├── controllers/           # Route handlers
│   ├── user.controller.js
│   └── expense.controller.js
└── middleware/            # (Optional) Authentication middleware
```

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/yourusername/expense-tracker-backend.git
cd expense-tracker-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Run the Server
```bash
npm run dev
```
Server runs on `http://localhost:5000`

## 📘 API Endpoints

### 🔐 Auth
- `POST /api/users/register` – Register new user
- `POST /api/users/login` – Login user

### 💰 Expenses
- `GET /api/expenses` – Get all expenses
- `POST /api/expenses` – Create new expense
- `PUT /api/expenses/:id` – Update expense
- `DELETE /api/expenses/:id` – Delete expense

## 📊 Features
- User registration and login with hashed passwords
- JWT authentication
- Full CRUD operations for expense management
- Timestamps on all records

## 📦 Deployment Options
- **Backend**: Railway, Render, or Cyclic
- **Database**: MongoDB Atlas

---

Feel free to fork this repo and extend it with features like:
- Monthly budget tracking
- Expense analytics with charts
- Export to CSV

---

MIT License © Shokat Akbar
