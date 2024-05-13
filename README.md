# Mongoose Express CRUD Mastery
A Node.js Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for user data and order management. Ensure data integrity through validation using Joi/Zod.

### Define Data Models

- Mongoose models for User data based on the provided data structure.
- appropriate data types, validations.

### Data Types List

- `userId` (number): A unique identifier for the user.
- `username` (string): Denotes the user's unique username, ensuring uniqueness across the system.
- `password` (string): Represents the user's password. The password is securely stored in hashed form, utilizing the bcrypt algorithm for hashing.
- `fullName` (object): An object containing the first and last name of the user.
    - `firstName` (string): The first name of the user.
    - `lastName` (string): The last name of the user.
- `age` (number): The age of the user.
- `email` (string): The email address of the user.
- `isActive` (boolean): A flag indicating whether the user is active or not.
- `hobbies` (array of strings): An array containing the hobbies of the user.
- `address` (object): An object containing the street, city, and country of the user's address.
    - `street` (string): The street of the user's address.
    - `city` (string): The city of the user's address.
    - `country` (string): The country of the user's address.
- `orders` (array of objects): An array containing the orders of the user.
    - `productName` (string): The name of the product in the order.
    - `price` (number): The price of the product in the order.
    - `quantity` (number): The quantity of the product in the order.



### User Management:

### 1. Create a new user

- Endpoint: **POST /api/users**
- Request Body:

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
```

- Response: Newly created user object.

```json
{
    "success": true,
    "message": "User created successfully!",
    "data": {
        "userId": "number",
        "username": "string",
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
}
```

### 2. Retrieve a list of all users

- Endpoint: **GET /api/users**
- Response: List of user objects.

```json
{
    "success": true,
    "message": "Users fetched successfully!",
    "data": [
        {
            "username": "string",
            "fullName": {
                "firstName": "string",
                "lastName": "string"
            },
            "age": "number",
            "email": "string",
            "address": {
                "street": "string",
                "city": "string",
                "country": "string"
            }
        },
        // more objects...
    ]
}
```

### 3. Retrieve a specific user by ID

- Endpoint: **GET /api/users/:userId**

- Response: the password field is not included in the response data. 

```json
{
    "success": true,
    "message": "User fetched successfully!",
    "data": {
        "userId": "number",
        "username": "string",
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
}
```

### 4. Update user information

- Endpoint: **PUT /api/users/:userId**

- Request Body: Updated user data (similar structure as in user creation).

- Response:the password field is not included in the response data.
```json
{
    "success": true,
    "message": "User updated successfully!",
    "data": {
        "userId": "number",
        "username": "string",
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
}
```

### 5. Delete a user

- Endpoint: **DELETE /api/users/:userId**

- Response: Success message 

```json
{
	"success": true,
	"message": "User deleted successfully!",
	"data" : null
}
```


### Order Management:

1. Add New Product in Order

- Endpoint: **PUT /api/users/:userId/orders**

- Request Body:
```json
{
    "productName": "string",
    "price": "number",
    "quantity": "number"
}
```

- Response: 

```json
{
    "success": true,
    "message": "Order created successfully!",
    "data": null
}
```

### 2. Retrieve all orders for a specific user

- Endpoint: **GET /api/users/:userId/orders**

- Response: 

```json
{
    "success": true,
    "message": "Order fetched successfully!",
    "data": {
        "orders": [
            {
                "productName": "Product 1",
                "price": 23.56,
                "quantity": 2
            },
            {
                "productName": "Product 2",
                "price": 23.56,
                "quantity": 5
            }
        ]
    }
}
```

### 3. **Calculate Total Price of Orders for a Specific User**

- Endpoint: **GET /api/users/:userId/orders/total-price**
- Response: Total price of all orders for the specified user

```json
{
    "success": true,
    "message": "Total price calculated successfully!",
    "data": {
        "totalPrice": 454.32
    }
}
```

### Sample Error Response

```json
{
    "success": false,
    "message": "User not found",
    "error": {
        "code": 404,
        "description": "User not found!"
    }
}
```

## Validation with Joi

- Used Joi to validate incoming data for user and order creation and updating operations.
- the data adheres to the structure defined in the models.
