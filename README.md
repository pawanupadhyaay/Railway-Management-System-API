# Railway Management System API
This project is a Railway Management System API similar to IRCTC, built with Node.js, Express, and MySQL. 
It allows users to register, log in, check train availability, book seats, and manage trains (admin only).

Table of Contents
-Features
-Technologies Used
-Setup and Installation
-Environment Variables
-Database Setup
-API Endpoints
-Usage
-License

# Features
User registration and authentication
Role-based access control (Admin and User)
Train management (Add, update)
Check train and seat availability
Book train seats
JWT authentication for secure endpoints

# Technologies Used
<u>Node.js<u/>: JavaScript runtime environment.
<u>Express</u>: Web framework for Node.js.
<u>MySQL</u>: Relational database for storing application data.
<u>Sequelize</u>: ORM for managing MySQL database.
<u>bcryptjs</u>: Library for hashing passwords.
<u>jsonwebtoken</u>: Library for creating and verifying JWTs.
<u>dotenv</u>: Library for loading environment variables.

# Setup and Installation

1.Clone the Repository:
git clone https://github.com/pawanupadhyaay/railway-management-system.git
cd railway-management-system

2.Install Dependencies:
npm install

3.Set Up Environment Variables:

MYSQL_HOST=localhost
MYSQL_DATABASE=railway_management
MYSQL_USER=root
MYSQL_PASSWORD=your_password
JWT_SECRET=your_jwt_secret
PORT=5000

4.Start the Application:
Make sure your MySQL server is running and then start the Node.js server:
node index.js

# Environment Variables

The .env file should contain the following variables:
MYSQL_HOST: Hostname for your MySQL server.
MYSQL_DATABASE: Name of the MySQL database.
MYSQL_USER: MySQL username.
MYSQL_PASSWORD: MySQL password.
JWT_SECRET: Secret key for signing JWT tokens.
PORT: Port number on which the server will run.

# Database Setup

1.Create MySQL Database:
Before running the application, create a MySQL database named railway_management:

CREATE DATABASE railway_management;

2.Synchronize Models:
When the server starts, Sequelize will automatically sync the models with the database and create the necessary tables.

# API Endpoints
Below are the available API endpoints:

Authentication Routes

-Register User: POST /api/auth/register
-Request Body: { "username": "your_username", "password": "your_password", "role": "user or admin" }
-Response: Success message or error.

Login User: POST /api/auth/login
-Request Body: { "username": "your_username", "password": "your_password" }
-Response: JWT token.

# Train Management (Admin Only)

Add Train: POST /api/trains/add
-Headers: { "Authorization": "Bearer <token>" }
-Request Body: { "trainNumber": "12345", "source": "Station A", "destination": "Station B", "totalSeats": 100 }
-Response: Success message or error.

Booking Routes

Check Train Availability: GET /api/trains?source=StationA&destination=StationB
-Response: List of trains available between the specified source and destination.

Book Seat: POST /api/bookings
-Headers: { "Authorization": "Bearer <token>" }
-Request Body: { "trainId": "1", "seatNumber": 5 }
-Response: Success message or error.

Get Booking Details: GET /api/bookings/:bookingId
-Headers: { "Authorization": "Bearer <token>" }
-Response: Details of the booking.

# Usage

1.Register a User: Use the /api/auth/register endpoint to create a new user.
2.Login: Log in using the /api/auth/login endpoint to receive a JWT token.
3.Add Trains: If you are an admin, use your token to add new trains via the /api/trains/add endpoint.
4.Check Train Availability: Use /api/trains to see available trains between two stations.
5.Book a Seat: Use the /api/bookings endpoint with your token to book a seat on a train.
6.View Bookings: Retrieve booking details using /api/bookings/:bookingId.

# License
This project is licensed under the MIT License.

