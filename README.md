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
