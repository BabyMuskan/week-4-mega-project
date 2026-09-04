# Week 5 Project Troubleshooting Log

## 1. Bcrypt Password Verification Failure
* *Issue:* Users encountered errors or failed validation when attempting to change their passwords.
* *Cause:* Plaintext input was being directly compared against hashed strings stored in MongoDB Atlas.
* *Solution:* Implemented bcrypt.compare(oldPassword, user.password) to correctly validate existing passwords and generated a secure salt (bcrypt.genSalt()) before hashing new passwords.

## 2. Unauthorized API Access (401) on Profile Updates
* *Issue:* Profile update and password change requests from the frontend were rejected by the server with unauthorized status codes.
* *Cause:* The Authorization header containing the JWT bearer token was omitted from the client-side fetch request headers.
* *Solution:* Extracted the token from browser localStorage and injected it into the headers:
  ```javascript
  headers: {
      "Content-Type": "application/json",
      "Authorization": Bearer ${token}
  }