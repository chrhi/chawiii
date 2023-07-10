# API Documentation

Welcome to the API documentation for the **chawiii** service. This API allows you to perform various actions related to users, services, and reports. The base URL for all API endpoints is `https://chawiii.vercel.app/api/`.

---

## Auth

Endpoint: `POST /auth`

Authenticates a user by validating the provided email and password.

### Request

- Method: `POST`
- Endpoint: `https://chawiii.vercel.app/api/auth`
- Headers:
  - Content-Type: `application/json`

Example Request Body:

```json
{
  "ApiKey": "<your-api-key>",
  "email": "<user-email>",
  "password": "<user-password>"
}
```

- `ApiKey` (string, required): Your API key for authentication.
- `email` (string, required): The user's email address.
- `password` (string, required): The user's password.

### Response

- Status: `200 OK`, `400 Bad Request`, or `401 Unauthorized`
- Content-Type: `application/json`

Example Response (Status: 200 OK):

```json
{
  "id": "<user-id>",
  "name": "<user-name>",
  "email": "<user-email>",
   "and much more , " : "you will see in the request "
}
```

Example Response (Status: 400 Bad Request):

```json
{
  "error": "the email is not valid"
}
```

Example Response (Status: 401 Unauthorized):

```json
{
  "error": "Unauthorized"
}
```

---

Please note that you need to replace `<your-api-key>` with your actual API key, `<user-email>` with the user's email, and `<user-password>` with the user's password.



---

## v1/services

Endpoint: `GET /v1/services`

Retrieves all services.

### Request

- Method: `GET`
- Endpoint: `https://chawiii.vercel.app/api/v1/services`

### Response

- Status: `200 OK` or `500 Internal Server Error`
- Content-Type: `application/json`

Example Response (Status: 200 OK):

```json
[
  {
    "id": "<service-id1>",
    "title": "<service-title1>",
    "description": "<service-description1>",
    "cost": "<service-cost1>",
    "image": "<service-image1>",
    "url": "<service-url1>"
  },
  {
    "id": "<service-id2>",
    "title": "<service-title2>",
    "description": "<service-description2>",
    "cost": "<service-cost2>",
    "image": "<service-image2>",
    "url": "<service-url2>"
  },
  ...
]
```

Example Response (Status: 500 Internal Server Error):

```json
{
  "error": "Server error"
}
```

---

Please note that the actual response will contain an array of service objects, where each service object will have properties such as `id`, `title`, `description`, `cost`, `image`, and `url`.



---

## v1/client

Endpoint: `POST /v1/client`

Performs various actions related to clients, employees, and services.

### Request

- Method: `POST`
- Endpoint: `https://chawiii.vercel.app/api/v1/client`
- Headers:
  - Content-Type: `application/json`

Example Request Body:

```json
{
  "action": "<action>",
  "id": "<client-id>",
  "employeeId": "<employee-id>",
  "serviceId": "<service-id>"
}
```

- `action` (string, required): The action to perform. Available actions: "get my employees", "get my services", "buy new service", "assign a service to an employee".
- `id` (string, required): The client ID.
- `employeeId` (string, required for "assign a service to an employee" action): The employee ID.
- `serviceId` (string, required for "buy new service" action): The service ID.

### Response

- Status: `200 OK`, `400 Bad Request`, or `500 Internal Server Error`
- Content-Type: `application/json`

Example Response (Status: 200 OK):

```json
[
  {
    "id": "<employee-id1>",
    "name": "<employee-name1>",
    "email": "<employee-email1>",
    "position": "<employee-position1>"
  },
  {
    "id": "<employee-id2>",
    "name": "<employee-name2>",
    "email": "<employee-email2>",
    "position": "<employee-position2>"
  },
  ...
]
```

Example Response (Status: 400 Bad Request):

```json
{
  "error": "Need to provide a valid action",
  "status": 400
}
```

Example Response (Status: 500 Internal Server Error):

```json
{
  "error": "Server error",
  "status": 500
}
```

---

Please note that the actual response will vary based on the performed action and the specific data returned.


---

## v1/employee

Endpoint: `POST /v1/employee`

Performs various actions related to employees.

### Request

- Method: `POST`
- Endpoint: `https://chawiii.vercel.app/api/v1/employee`
- Headers:
  - Content-Type: `application/json`

Example Request Body:

```json
{
  "ApiKey": "<your-api-key>",
  "action": "<action>",
  "id": "<employee-id>"
}
```

- `ApiKey` (string, required): Your API key for authentication.
- `action` (string, required): The action to perform. Available actions: "get my services".
- `id` (string, required): The employee ID.

### Response

- Status: `200 OK`, `400 Bad Request`
- Content-Type: `text/plain`

Example Response (Status: 200 OK):

```
we are working on it so it is not available yet
```

Example Response (Status: 400 Bad Request):

```
need to provide a valid action
```

---

Please note that you need to replace `<your-api-key>` with your actual API key, `<action>` with the desired action, and `<employee-id>` with the ID of the employee you want to perform the action for.


