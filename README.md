# Railway Management System API
This project is a Railway Management System API similar to IRCTC, built with Node.js, Express, and MySQL. 
It allows users to register, log in, check train availability, book seats, and manage trains (admin only).

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
  * [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Installation](#gear-installation)
  * [Running Tests](#test_tube-running-tests)
  * [Run Locally](#running-run-locally)
  * [Deployment](#triangular_flag_on_post-deployment)
- [Usage](#eyes-usage)
- [Contributing](#wave-contributing)
- [License](#warning-license)
- [Contact](#handshake-contact)


  

<!-- About the Project -->
## :star2: About the Project


<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
  <img src="https://placehold.co/600x400?text=Your+Screenshot+here" alt="screenshot" />
</div>


<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mysql.com/">MySQL</a></li>
  </ul>
</details>

<!-- Features -->
### :dart: Features

- User Registration and Authentication: Allows new users to register and authenticate themselves using a secure login system with JWT (JSON Web Token) for session management.
- Role-Based Access Control: Supports different user roles (Admin and User) to restrict access to certain functionalities based on the user's role.
- Add New Trains: Admins can add new trains to the system, specifying the train number, source, destination, and total seats.
- Update Train Information: Admins can update existing train details, including available seats and routes.
- Check Train Availability: Users can check the availability of trains between two specified stations.
- View Seat Availability: Provides the number of available seats for each train on a specific route.
- Book a Seat: Users can book seats on a train if available, with the system handling concurrent booking requests to prevent overbooking.
- Real-Time Data Handling: Ensures real-time updates to seat availability, reflecting changes immediately when bookings are made.
- Secure Endpoints: Protects sensitive endpoints using JWT authentication, ensuring that only authorized users can access specific features.
- Error Handling and Validation: Implements robust error handling and input validation to provide meaningful error messages and prevent invalid data from entering the system.
- Scalable Architecture: Designed with scalability in mind, allowing the system to handle a growing number of users and booking transactions efficiently.

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`MYSQL_HOST`

`MYSQL_DATABASE`

`MYSQL_USER`

`MYSQL_PASSWORD`

`JWT_SECRET`

`PORT`


## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Prerequisites

This project uses npm as package manager

```bash
 npm install --global 
```

<!-- Installation -->
### :gear: Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
   
<!-- Running Tests -->
### :test_tube: Running Tests

To run tests, run the following command

```bash
  npm test test
```

<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/pawanupadhyaay/railway-management-API.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


<!-- Deployment -->
### :triangular_flag_on_post: Deployment

To deploy this project run

```bash
  npm deploy
```


<!-- Usage -->
## :eyes: Usage

Use this space to tell a little more about your project and how it can be used. Show additional screenshots, code samples, demos or link to other resources.


```javascript
1.Register a User: 
Use the /api/auth/register endpoint to create a new user.
2.Login: 
Log in using the /api/auth/login endpoint to receive a JWT token.
3.Add Trains: 
If you are an admin, use your token to add new trains via the /api/trains/add endpoint.
4.Check Train Availability: 
Use /api/trains to see available trains between two stations.
5.Book a Seat: 
Use the /api/bookings endpoint with your token to book a seat on a train.
6.View Bookings: 
Retrieve booking details using /api/bookings/:bookingId.
```
<!-- Roadmap -->
## :compass: Roadmap

* [x] Phase 1: Initial Release 
* [ ] Phase 2: Enhanced Booking Features
* [ ] Phase 3: Real-Time Notifications
* [ ] Phase 4: Admin Dashboard
* [ ] Phase 5: Security and Performance Enhancements
* [ ] Phase 7: Deployment and Scaling


<!-- Contributing -->
## :wave: Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.


<!-- License -->
## :warning: License

Distributed under the no License. See LICENSE.txt for more information.


<!-- Contact -->
## :handshake: Contact

Your Name - [@twitter_handle](https://x.com/pawanupadhyaay) - upawan7273@gmail.com

Project Link: (https://github.com/pawanupadhyaay/Railway-Management-System-API.git)
