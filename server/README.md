# Jumbo Admin Dashboard - Backend Server

## Overview
This is the backend server for the Jumbo Admin Dashboard built with Node.js, Express, and MongoDB.

## Features
- JWT-based authentication
- User registration and login
- Password hashing with bcrypt
- Input validation
- Error handling middleware
- Rate limiting
- Security headers with Helmet
- CORS configuration

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following variables:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/jumbo-admin
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
NODE_ENV=development
```

4. Start the server:
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /register` - Register a new user
- `POST /login` - Login user
- `GET /me` - Get current user (protected)
- `POST /logout` - Logout user (protected)

### User Routes (`/api/users`)
- `GET /` - Get all users (admin only)
- `GET /:id` - Get user by ID (protected)
- `PUT /:id` - Update user (protected)

## Database Schema

### User Model
```javascript
{
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: ['user', 'admin'], default: 'user'),
  profilePic: String (default avatar),
  isActive: Boolean (default: true),
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## Security Features
- Password hashing with bcrypt (12 rounds)
- JWT token authentication
- Input validation and sanitization
- Rate limiting (100 requests per 15 minutes)
- Security headers with Helmet
- CORS protection
- Error handling without exposing sensitive information

## Environment Variables
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `JWT_EXPIRE` - JWT token expiration time
- `NODE_ENV` - Environment (development/production)

## Development
The server uses nodemon for development, which automatically restarts the server when files change.

```bash
npm run dev
```

## Production Deployment
1. Set `NODE_ENV=production`
2. Use a strong `JWT_SECRET`
3. Configure MongoDB connection for production
4. Set up proper CORS origins
5. Consider using PM2 for process management