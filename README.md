# Mongoose Express CRUD Mastery

Welcome to Mongoose Express CRUD Mastery! This project about Node.js Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for user data and order management..

# Node.js Express Application with MongoDB and TypeScript

This is a Node.js Express application built with TypeScript that integrates MongoDB using Mongoose for user data and order management. It also includes data validation using Joi/Zod to ensure data integrity.

## Setup

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and define the following variables:

    ```env
    PORT=3000
    MONGODB_URI=<your_mongodb_uri>
    ```

4. **Start the server:**

    ```bash
    npm start
    ```

## Project Structure

The project structure is organized as follows:

- `src/`
  - `controllers/`: Contains route handlers for different endpoints.
  - `models/`: Includes Mongoose models for user and order data.
  - `routes/`: Defines API routes.
  - `utils/`: Contains utility functions such as validation.
  - `middlewares/`: Custom middleware functions.
  - `index.ts`: Entry point of the application.
  - `server.ts`: Configures Express server.





User Management:

## Create a New User

Endpoint: `POST /api/users`

### Request Body

```json
{
    "userId": "number",
    "username": "string",
    "password": "string",
    "fullName": {
        "firstName": "string",
        "lastName": "string"
    },
    "age": "number",
    "email": "string",
    "isActive": "boolean",
    "hobbies": [
        "string",
        "string"
    ],
    "address": {
        "street": "string",
        "city": "string",
        "country": "string"
    }
}




