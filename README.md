# Chatify - Realtime Chat Application

Chatify is a full-stack real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.io. It allows users to engage in real-time messaging, create profiles, and share media securely.

## Features

- **Real-time Messaging**: Instant messaging powered by Socket.io.
- **User Authentication**: Secure JWT-based authentication.
- **Media Sharing**: Upload and share images with Cloudinary.
- **Modern UI**: Fully responsive and beautiful UI built with React and TailwindCSS.
- **State Management**: Robust state management using Redux Toolkit.
- **Emoji Support**: Integrated emoji picker for expressive messaging.

## Tech Stack

### Frontend
- **React** (with Vite)
- **Redux Toolkit**
- **TailwindCSS**
- **Socket.io-client**
- **React Router**
- **Axios**

### Backend
- **Node.js & Express.js**
- **MongoDB & Mongoose**
- **Socket.io**
- **JSON Web Tokens (JWT)**
- **Cloudinary** & **Multer** (for image upload)
- **Bcryptjs** (for password hashing)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB account/URI
- Cloudinary account for media storage

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prerna017/Chatify.git
   cd Chatify
   ```

2. **Setup Backend:**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

3. **Setup Frontend:**
   ```bash
   cd ../frontend
   npm install
   ```
   Create a `.env` file in the `frontend` directory if required by your setup (e.g., `VITE_API_URL=http://localhost:5000`).

### Running the Application

**Run Backend (Development mode):**
```bash
cd backend
npm run dev
```

**Run Frontend (Development mode):**
```bash
cd frontend
npm run dev
```

The frontend will start typically on `http://localhost:5173` and backend on `http://localhost:5000`.

## License

This project is licensed under the ISC License.
