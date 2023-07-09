# API Documentation

Welcome to the API documentation for the **chawiii** service. This API allows you to perform various actions related to users, services, and reports. The base URL for all API endpoints is `https://chawiii.vercel.app/api/rayan`.

## Supported Actions

### Give Service to User
Action: `give service to user`

Adds a service to a user's profile.

**Request Example:**
```json
POST /rayan

{
  "action": "give service to user",
  "userId": "123456",
  "ServiceId": "789012",
  "title": "Service Title"
}
```

**Response Example:**
```json
{
  "from": "abdullah",
  "message": "note that the userId is the client ID. We add that ID to an array of clients. You can find the updated service version.",
  "updatedService": {
    "id": "123456",
    "ServiceId": "789012",
    "title": "Service Title"
  }
}
```

### Get User Services
Action: `get user services`

Retrieves all services assigned to a user.

**Request Example:**
```json
POST /rayan

{
  "action": "get user services",
  "userId": "123456"
}
```

**Response Example:**
```json
{
  "from": "abdullah",
  "message": "note that if you provide the ID of an employee or client, the return will be the assigned services",
  "updatedService": [
    {
      "id": "789012",
      "title": "Service Title"
    },
    {
      "id": "345678",
      "title": "Another Service"
    }
  ]
}
```

### Ask for a Report
Action: `ask for a report`

Creates a new report request.

**Request Example:**
```json
POST /rayan

{
  "action": "ask for a report",
  "title": "Report Title",
  "description": "Report Description",
  "userId": "123456"
}
```

**Response Example:**
```json
{
  "from": "abdullah",
  "message": "here is the request you have just created",
  "request": {
    "id": "987654",
    "title": "Report Title",
    "description": "Report Description",
    "userId": "123456"
  }
}
```

### Get User Reports
Action: `get user report`

Retrieves all reports associated with a user.

**Request Example:**
```json
POST /rayan

{
  "action": "get user report",
  "userId": "123456"
}
```

**Response Example:**
```json
{
  "from": "abdullah",
  "message": "here are all the reports",
  "reports": [
    {
      "id": "987654",
      "title": "Report Title",
      "description": "Report Description"
    },
    {
      "id": "543210",
      "title": "Another Report",
      "description": "Another Description"
    }
  ]
}
```

Please note that all requests should be made using the `POST` method.


 The  URL for users API endpoints is ` https://chawiii.vercel.app/api/users`.

## Endpoint: `/api`

### Authentication

Performs user authentication and validates the provided credentials.

**URL:** `/api`

**Method:** `POST`

**Request Example:**
```json
POST /api

{
  "action": "auth",
  "email": "example@example.com",
  "password": "secretpassword"
}
```

**Response Example (Valid User):**
```json
{
  "from": "abdullah",
  "message": "The user is valid",
  "valid": true,
  "user": {
    "id": "123456",
    "email": "example@example.com",
    "name": "John Doe"
  }
}
```

**Response Example (Invalid User):**
```json
{
  "from": "abdullah",
  "message": "The user is not valid",
  "valid": false,
  "user": null
}
```

### Error Responses

If the request does not include an action, the API will respond with an error.

**Response Example (Missing Action):**
```json
{
  "from": "abdullah",
  "message": "The API is working",
  "error": "You need to provide an action"
}
```

If the provided action is not supported, the API will respond with an error indicating the unsupported action.

**Response Example (Unsupported Action):**
```json
{
  "from": "abdullah",
  "message": "The API is working, but the provided action is not supported",
  "action": "invalidAction"
}
```

Please note that all requests to the API should be made using the `POST` method.

## Base URL

The base URL for all API endpoints is `https://your-api-url.com`. Make sure to prepend this URL to the endpoint paths when making requests.


## new update 

# API Documentation

This documentation provides information about the API endpoints and their functionalities. The API is built using the Next.js framework and utilizes the Prisma ORM for database operations.

## Endpoints

### POST `/`

This endpoint handles various actions based on the provided `action` parameter. The expected request payload should be in JSON format.

#### Request Payload

The request payload should include the following parameters:

- `action` (string, required): The action to be performed.
- `id` (string): The ID parameter.
- `userId` (string): The user ID parameter.
- `ServiceId` (string): The service ID parameter.
- `title` (string): The title parameter.
- `description` (string): The description parameter.
- `employeeId` (string): The employee ID parameter.

```javascript
{
  "action": "give service to employee",
  "id": "example_id",
  "userId": "example_userId",
  "ServiceId": "example_ServiceId",
  "title": "example_title",
  "description": "example_description",
  "employeeId": "example_employeeId"
}
```

#### Response

The response will be in JSON format and may vary depending on the action performed.

##### Example Response

```javascript
{
  "from": "abdullah",
  "message": "not that the userid is the client id we add that id to an array of clients, you can find the service updated version",
  "updatedService": {
    // Updated service data
  }
}
```

## Actions

### Action: "give service to employee"

This action assigns a service to an employee.

#### Request

- `action`: "give service to employee"

##### Example Request

```javascript
{
  "action": "give service to employee",
  "userId": "example_userId",
  "ServiceId": "example_ServiceId",
  "title": "example_title"
}
```

#### Response

The response includes the updated service information.

### Action: "get user services"

This action retrieves services associated with a user.

#### Request

- `action`: "get user services"

##### Example Request

```javascript
{
  "action": "get user services",
  "userId": "example_userId"
}
```

#### Response

The response includes the services associated with the user.

### Action: "ask for a report"

This action creates a new report request.

#### Request

- `action`: "ask for a report"
- `description` (optional): Description of the report request.
- `title` (optional): Title of the report request.
- `userId`: ID of the user making the request.

##### Example Request

```javascript
{
  "action": "ask for a report",
  "description": "example_description",
  "title": "example_title",
  "userId": "example_userId"
}
```

#### Response

The response includes the newly created report request.

### Action: "get client services"

This action retrieves services associated with a client.

#### Request

- `action`: "get client services"
- `userId`: ID of the client.

##### Example Request

```javascript
{
  "action": "get client services",
  "userId": "example_userId"
}
```

#### Response

The response includes the services associated with the client.

### Action: "get user report"

This action retrieves reports associated with a user.

#### Request

- `action`: "get user report"
- `userId`: ID of the user.

##### Example Request

```javascript
{
  "action": "get user report",
  "userId": "example_userId"
}
```

#### Response

The response includes the reports associated with the user.

### Action: "assign service to employee"

This action assigns a service to an employee.

#### Request

- `action`: "assign service to employee"
- `userId`: ID of the user.
- `employeeId`: ID of the employee.
- `ServiceId`: ID of the service.
- `title`: Title of the service.

##### Example Request

```javascript
{
  "action": "assign service to employee",
  "userId": "example_userId",
  "employeeId": "example_employeeId",
  "ServiceId": "example_ServiceId",
  "title": "example_title"
}
```

#### Response

The response includes the deal's information.

### Action: "get all services"

This action retrieves all services.

#### Request

- `action`: "get all services"

##### Example Request

```javascript
{
  "action": "get all services"
}
```

#### Response

The response includes all the services.

## License

This API is released under the [MIT License](https://opensource.org/licenses/MIT).

# API Documentation

This documentation provides information about the API endpoints and their functionalities. The API is built using the Next.js framework and utilizes the Prisma ORM for database operations.

## Endpoints

### GET `/`

This endpoint retrieves all users from the database.

#### Request

No request payload is required for this endpoint.

#### Response

The response will be in JSON format and will include all the users.

##### Example Response

```javascript
{
  "from": "abdullah",
  "message": "here are all the users",
  "users": [
    // User objects
  ]
}
```

### POST `/`

This endpoint handles various actions based on the provided `action` parameter. The expected request payload should be in JSON format.

#### Request Payload

The request payload should include the following parameters:

- `action` (string, required): The action to be performed.
- `password` (string): The password parameter.
- `userId` (string): The user ID parameter.
- `bio` (string): The bio parameter.
- `email` (string): The email parameter.
- `image` (string): The image parameter.
- `name` (string): The name parameter.

```javascript
{
  "action": "edit user",
  "password": "example_password",
  "userId": "example_userId",
  "bio": "example_bio",
  "email": "example_email",
  "image": "example_image",
  "name": "example_name"
}
```

#### Response

The response will be in JSON format and may vary depending on the action performed.

##### Example Response

```javascript
{
  "from": "abdullah",
  "message": "here are all the employees assigned to the client with that service",
  "updatedUser": {
    // Updated user data
  }
}
```

## Actions

### Action: "get client employees"

This action retrieves employees assigned to a client based on their services.

#### Request

- `action`: "get client employees"
- `userId`: ID of the client.

##### Example Request

```javascript
{
  "action": "get client employees",
  "userId": "example_userId"
}
```

#### Response

The response includes the employees assigned to the client.

### Action: "edit user"

This action updates a user's information.

#### Request

- `action`: "edit user"
- `userId`: ID of the user.
- `bio` (optional): Updated user's bio.
- `email` (optional): Updated user's email.
- `image` (optional): Updated user's image.
- `name` (optional): Updated user's name.

##### Example Request

```javascript
{
  "action": "edit user",
  "userId": "example_userId",
  "bio": "example_bio",
  "email": "example_email",
  "image": "example_image",
  "name": "example_name"
}
```

#### Response

The response includes the updated user's information.

### Action: "auth"

This action validates a user's credentials.

#### Request

- `action`: "auth"
- `email`: User's email.
- `password`: User's password.

##### Example Request

```javascript
{
  "action": "auth",
  "email": "example_email",
  "password": "example_password"
}
```

#### Response

The response includes information about the validity of the user's credentials.

### Action: Default

This action is executed when no valid action is provided.

#### Request

- `action`: Invalid or missing action.

##### Example Request

```javascript
{
  "action": "invalid_action"
}
```

#### Response

The response includes a message indicating the provided action is not valid.

## License

This API is released under the [MIT License](https://opensource.org/licenses/MIT).
