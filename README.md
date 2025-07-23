# V2 Project

A modern Node.js/Express.js web application with authentication, user management, and request handling capabilities.

## Features

- 🔐 **Authentication & Authorization**
  - JWT-based authentication
  - Google OAuth integration
  - Role-based access control (User/Admin)
  - Password hashing with bcrypt

- 👥 **User Management**
  - User registration and login
  - Profile management
  - Email verification
  - Password reset functionality

- 📝 **Request Management**
  - Create and manage requests
  - Different request types (support, feature, bug, general)
  - Priority levels and status tracking
  - Comments system

- 🛡️ **Security**
  - Rate limiting
  - CORS protection
  - Helmet security headers
  - Input validation and sanitization

- 🗄️ **Database**
  - MongoDB with Mongoose ODM
  - Proper indexing for performance
  - Data validation and relationships

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, Passport.js
- **Validation**: express-validator
- **Security**: Helmet, CORS, Rate limiting
- **Environment**: dotenv

## Project Structure

```
├── app.js                 # Main application file
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables
├── .gitignore           # Git ignore rules
├── config/              # Configuration files
│   └── config.js        # App configuration
├── controllers/         # Route controllers
│   ├── authController.js
│   ├── adminController.js
│   ├── profileController.js
│   ├── requestController.js
│   └── exampleController.js
├── database/           # Database configuration
│   └── connection.js   # MongoDB connection
├── middleware/         # Custom middleware
│   ├── auth.js        # Authentication middleware
│   └── validation.js  # Validation middleware
├── models/            # Database models
│   ├── User.js       # User model
│   ├── Request.js    # Request model
│   └── exampleModel.js
├── routes/           # API routes
│   ├── auth.js      # Authentication routes
│   ├── authGoogle.js # Google OAuth routes
│   ├── admin.js     # Admin routes
│   ├── profile.js   # Profile routes
│   ├── requests.js  # Request routes
│   └── example.js   # Example routes
├── utils/           # Utility functions
│   ├── jwt.js      # JWT utilities
│   └── response.js # Response helpers
├── public/         # Static files
│   └── index.html # Frontend files
└── tests/         # Test files
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd v2-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system

5. **Run the application**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/v2project

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/google/callback

# Other Configuration
BCRYPT_ROUNDS=12
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/google` - Google OAuth login
- `GET /api/auth/google/callback` - Google OAuth callback

### Profile
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update user profile
- `PUT /api/profile/password` - Change password

### Requests
- `GET /api/requests` - Get all requests
- `POST /api/requests` - Create new request
- `GET /api/requests/:id` - Get specific request
- `PUT /api/requests/:id` - Update request
- `DELETE /api/requests/:id` - Delete request

### Admin
- `GET /api/admin/users` - Get all users (Admin only)
- `PUT /api/admin/users/:id` - Update user (Admin only)
- `DELETE /api/admin/users/:id` - Delete user (Admin only)

## Scripts

- `npm start` - Start the application
- `npm run dev` - Start in development mode with nodemon
- `npm test` - Run tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.