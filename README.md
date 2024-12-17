# Student Management System

# Project Description:
The Student Management System is a comprehensive platform designed to manage student records, fee histories, and library histories. Built using React, Redux, Node.js, and MongoDB, the system provides role-based access control for Admin, Office Staff, and Librarian roles. Each role has specific permissions to ensure secure and efficient management of student-related data.

# Setup Instructions

git clone <repository-url>
cd student-management-system

# Install server dependencies
cd student-management-system
npm install

# Install client dependencies
cd student-management-frontend
npm install

# Set up the .env file
MONGO_URI=mongodb://<your-mongo-db-url>
JWT_SECRET=<your-jwt-secret>
PORT=5000

# Start the server
cd student-management-system
npm run dev

# Start the client
cd  student-management-frontend
npm run dev


# List of Used Libraries

* Client-Side Libraries

- React: UI library for building user interfaces.
- Vite: Fast build tool and development server.
- Tailwind CSS: Utility-first CSS framework.
- Redux: State management library.
- Redux Toolkit: Simplifies Redux development.
- React Router DOM: Routing library for React.
- Axios: HTTP client for making API requests.
- React Icons: Icon library for React.
- React Redux: Official React bindings for Redux
- Taotify: Easy-to-use notification library.
- SweetAlert: Beautiful and customizable alerts.

* Server-Side Libraries

- Express: Web framework for Node.js.
- Mongoose: MongoDB object modeling tool.
- jsonwebtoken: For JWT-based authentication.
- dotenv: Loads environment variables from a .env file.
- bcryptjs: Library to hash passwords.
- cors: Middleware to enable CORS.
- Axios: HTTP client for making API request


