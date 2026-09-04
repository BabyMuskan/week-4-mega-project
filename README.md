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