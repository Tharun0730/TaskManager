# Task Manager Application

A full-stack Task Manager application built with React (Frontend) and Node.js/Express (Backend).

## Prerequisites

Before running the project, make sure the following are installed:

* Node.js (v18 or later recommended)
* npm (comes with Node.js)

Verify installation:

```bash
node -v
npm -v
```

---

## Project Structure

```text
task-manager/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## Backend Setup

### 1. Navigate to the backend folder

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file (if required)

Example:

```env
PORT=5000
```

### 4. Start the backend server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The backend server will run at:

```text
http://localhost:5000
```

---

## Frontend Setup

### 1. Navigate to the TaskManagerfrontend folder

```bash
cd taskManager_Frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The frontend application will run at:

```text
http://localhost:5173
```

---

## Available Scripts

### Backend

```bash
npm run dev      # Start backend with nodemon
npm start        # Start backend normally
```

### Frontend

```bash
npm run dev      # Start Vite development server
npm run build    # Build production files
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## Technologies Used

### Frontend

* React
* Vite
* Axios
* Material UI (MUI)

### Backend

* Node.js
* Express.js
* CORS
* dotenv
* UUID

---

## Notes

* Ensure the backend server is running before using the frontend application.

"# Task_Manager" 
