DataDash — Week 4 Mega Project

📊 Project Overview

DataDash is an interactive dashboard application built as a final Mega Project. It combines a responsive frontend, API integration, JWT authentication, MongoDB database connectivity, and CRUD operations.

The project was developed and tested locally and prepared for production deployment.

✨ Features

- 📊 Interactive dashboard
- 🔐 User registration and login
- 🔑 JWT authentication
- 👤 Protected user profile
- 📈 Interactive Chart.js visualization
- 🔎 Data filtering
- ⏳ Loading state
- 🔔 Toast notifications
- ⚠️ Form validation and error handling
- 🗄️ MongoDB database integration
- ➕ Create metrics
- 📖 Read metrics
- ✏️ Update metrics
- 🗑️ Delete metrics
- 📱 Responsive design

🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- Chart.js
- Postman
- GitHub

🔐 Authentication

The application uses JWT-based authentication.

Users can:

1. Register an account.
2. Log in using their email and password.
3. Receive a JWT token.
4. Use the token to access protected API routes.
5. View their protected profile.

📡 API Endpoints

Authentication

Method| Endpoint| Description
POST| "/api/auth/register"| Register a new user
POST| "/api/auth/login"| Login and receive JWT token
GET| "/api/auth/profile"| Fetch protected user profile

Metrics

Method| Endpoint| Description
POST| "/api/metrics"| Create a metric
GET| "/api/metrics"| Get all metrics
PUT| "/api/metrics/:id"| Update a metric
DELETE| "/api/metrics/:id"| Delete a metric

📸 Project Screenshots

Dashboard

"Dashboard" (screenshots/dashboard.png)

Login

"Login" (screenshots/login.png)

Protected Profile API

"Profile API" (screenshots/profile-api.png)

▶️ How to Run Locally

1. Install dependencies

npm install

2. Configure environment variables

Create a ".env" file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Never upload your real ".env" file or database credentials to GitHub.

3. Start the server

npm start

The backend will run on:

http://localhost:5000

🧪 Testing

The APIs were tested using Postman.

Tested functionality:

- User registration
- User login
- JWT token generation
- Protected profile access
- Create metric
- Read metrics
- Update metric
- Delete metric
- Invalid login handling
- Empty form validation

🐛 Troubleshooting

During development, several issues were identified and resolved, including:

- MongoDB connection configuration
- JWT authentication and Bearer Token setup
- Invalid email/password handling
- Incorrect API endpoint resulting in 404 errors
- Required Metric fields validation
- JSON syntax errors
- Local server connection issues

Detailed troubleshooting information is available in:

"TROUBLESHOOTING.md"

🚀 Deployment

The application is prepared for production deployment using a hosting platform such as Vercel, Render, or Netlify.

Before deployment:

- Remove debugging code.
- Configure production environment variables.
- Update localhost API URLs to the deployed backend URL.
- Test all API endpoints.
- Verify the frontend and backend communicate correctly.

👩‍💻 Project

DataDash — Week 4 Mega Project

Final project demonstrating frontend development, backend API development, authentication, database integration, API testing, and production deployment.