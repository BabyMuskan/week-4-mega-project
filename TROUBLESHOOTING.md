🛠️ Final Troubleshooting Log & Error Report

Developer: Muskan
Project: DataDash — Week 4 Mega Project
Track: Web Design & Development

---

📌 Issue Log 1: PowerShell Script Execution Restricted

Error Message:
"PSSecurityException - UnauthorizedAccess"

Phase: Initial Setup

Root Cause:
Windows PowerShell execution policy prevented npm scripts from running in the VS Code terminal.

Resolution / Solution:

- Used process-level execution policy to allow the required npm command.
- Alternatively, Command Prompt (cmd) was used inside VS Code.
- The project setup then continued successfully.

---

📌 Issue Log 2: Node.js Template Literal Syntax Error

Error Message:
"SyntaxError: missing ) after argument list"

Phase: Backend Server Setup

Root Cause:
Incorrect quotation marks were used while displaying the "PORT" variable.

Resolution / Solution:

The server code was corrected to use a valid template literal:

console.log(Server running on port ${PORT});

The server was restarted and successfully ran on port 5000.

---

📌 Issue Log 3: MongoDB Connection Error

Error Message:
"querySrv ENOTFOUND"

Phase: Database Configuration

Root Cause:
The MongoDB connection string in the environment configuration was incorrect.

Resolution / Solution:

- Verified the MongoDB Atlas cluster.
- Corrected the "MONGO_URI" value in ".env".
- Restarted the server.
- Confirmed that the application successfully connected to MongoDB.

---

📌 Issue Log 4: Invalid Email or Password

Error Message:
"Invalid email or password"

Phase: Authentication Testing

Root Cause:
The login credentials did not match the registered user's credentials.

Resolution / Solution:

- Verified the registered email address.
- Verified the correct password.
- Tested the login endpoint again using Postman.
- JWT token was successfully generated after valid authentication.

---

📌 Issue Log 5: Incorrect API Endpoint

Error Message:

Cannot POST /api

Phase: Postman API Testing

Root Cause:
The request was sent to "/api" instead of the complete authentication endpoint.

Resolution / Solution:

The endpoint was corrected to:

http://localhost:5000/api/auth/login

The request was sent again and returned:

"Login successful"

along with a JWT token.

---

📌 Issue Log 6: Profile API Protected Route

Issue:
The protected profile API required a valid JWT token.

Phase: Authentication & Authorization

Root Cause:
The protected endpoint requires a Bearer Token in the Authorization header.

Resolution / Solution:

- Logged in through the Login API.
- Copied the generated JWT token.
- Selected Authorization → Bearer Token in Postman.
- Added the token.
- Tested:

GET http://localhost:5000/api/auth/profile

Result:

"Profile fetched successfully"

---

📌 Issue Log 7: Users API Returned 404

Error Message:

404 Not Found

Phase: Postman API Testing

Root Cause:
A "/api/users" endpoint was requested, but the backend did not contain a users route.

Resolution / Solution:

The existing backend routes were reviewed. The correct metrics endpoint was used:

GET http://localhost:5000/api/metrics

The API successfully returned the metrics data.

---

📌 Issue Log 8: Metric Validation Error — Missing Category and Value

Error Message:

Metric validation failed:
category: Path category is required.
value: Path value is required.

Phase: Metrics CRUD Testing

Root Cause:
The required "category" and "value" fields were missing from the POST request body.

Resolution / Solution:

The request body was corrected to include the required fields:

{
  "name": "Monthly Sales",
  "category": "Sales",
  "value": 100
}

The metric was successfully created.

---

📌 Issue Log 9: Metric Validation Error — Missing Name

Error Message:

Metric validation failed:
name: Path name is required.

Phase: Metrics CRUD Testing

Root Cause:
The required "name" field was missing from the request body.

Resolution / Solution:

The request body was updated to include:

{
  "name": "Monthly Sales",
  "category": "Sales",
  "value": 100
}

The metric was successfully created.

---

📌 Issue Log 10: JSON Syntax Error

Error Message:
"Fix JSON syntax error"

Phase: Update Metric Testing

Root Cause:
The JSON request body contained an invalid syntax/format.

Resolution / Solution:

The request body was replaced with valid JSON:

{
  "name": "Monthly Sales Updated",
  "category": "Sales",
  "value": 200
}

The update request then executed successfully.

---

📌 Issue Log 11: Empty Login Form Validation

Issue:
Submitting the login form without entering credentials.

Phase: Frontend Edge-Case Testing

Root Cause:
The login form contains required fields.

Resolution / Solution:

HTML form validation prevents submission when required fields are empty.

The browser displays:

"Please fill out this field."

This confirms that empty login submissions are handled before the request is sent.

---

📌 Issue Log 12: Frontend Login Error Handling

Issue:
Testing incorrect login credentials from the dashboard.

Phase: Frontend Testing

Resolution / Solution:

The frontend checks the API response and displays an appropriate toast notification when authentication fails.

For incorrect credentials, the user receives:

"Invalid email or password."

For successful authentication:

"Login successful!"

---

📌 Final Testing Summary

The following functionality was successfully tested:

- ✅ User Registration
- ✅ User Login
- ✅ JWT Token Generation
- ✅ Bearer Token Authentication
- ✅ Protected Profile API
- ✅ Create Metric
- ✅ Read Metrics
- ✅ Update Metric
- ✅ Delete Metric
- ✅ Empty Form Validation
- ✅ Wrong Password Handling
- ✅ API Error Handling
- ✅ Loading State
- ✅ Toast Notifications

Final Status:
The application was successfully tested locally and prepared for production deployment.