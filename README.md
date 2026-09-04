# DataDash - Week 5 Project (App Optimization & User Management)

## Project Overview
DataDash is a full-stack web application developed for interactive data management, advanced searching, server-side pagination, user account settings, and secure authentication.

## Tech Stack
* *Frontend:* HTML5, CSS3, Vanilla JavaScript, Chart.js
* *Backend:* Node.js, Express.js
* *Database:* MongoDB Atlas (Mongoose ODM)
* *Security & Auth:* Bcrypt for password hashing and verification, JSON Web Tokens (JWT) for route protection

## Core Features Implemented
1. *Server-Side Pagination & Search:* 
   - Backend-integrated search and pagination routing.
   - Frontend dynamic controls for navigating records seamlessly.
2. *Secure Account Management:* 
   - PUT API routes for updating user profile details (Name & Email).
   - Secure password change route backed by bcrypt verification.
3. *Password Security:* 
   - Strict hashing using bcrypt.hash() and salt rounds.
   - Old password validation via bcrypt.compare() before updating to new credentials.
4. *UI Optimization & Theme Management:* 
   - Responsive styling with CSS variables (:root and [data-theme="dark"]).
   - Persistent Dark Mode toggle utilizing localStorage.
   ## 🚀 Live Demo & Deployment

The full-stack Node.js, Express, and MongoDB application is successfully deployed and running live on Railway.

* *Live API URL:* [https://week-4-mega-project-production.up.railway.app](https://week-4-mega-project-production.up.railway.app)
* *Hosting Platform:* Railway

---

## 🛠️ Environment Variables Setup

To run this project locally, create a .env file in the root directory and add the following configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
## ⚙️ Local Installation & Running

1. *Clone the repository:*
   ```bash
   git clone [https://github.com/BabyMuskan/week-5-mega-project.git](https://github.com/BabyMuskan/week-5-mega-project.git)

   Install dependencies:
   npm install

   Run the server:
   npm start

   