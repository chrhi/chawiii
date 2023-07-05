API Documentation - Users section

url for makeing requests are : https://chawiii.vercel.app/api/users

This API is built using Next.js with a Prisma database for managing user data and reports. The API provides two endpoints: GET and POST, enabling users to retrieve and manage user data and reports seamlessly.

Table of Contents
1. GET Users Endpoint
2. POST Users Endpoint
3. GET Reports Endpoint
4. POST Reports Endpoint

## 1. GET Users Endpoint

### Description
The GET endpoint retrieves a list of all users from the Prisma database.

### URL
GET /api/users

### Request Method
GET

### Request Parameters
None

### Response Format
Returns a JSON object containing the following information:

- from: A string indicating the API's author (in this case, "abdullah").
- message: A message indicating the success of the request ("here are all the users").
- users: An array of objects, each representing a user in the database. Each user object contains details such as type, bio, email, name, image, and password.

## 2. POST Users Endpoint

### Description
The POST endpoint allows users to perform specific actions related to users, such as adding a new user or checking the validity of an existing user.

### URL
POST /api/users

### Request Method
POST

### Request Format
The request must be in JSON format with the following properties:

- action: A string indicating the type of action to be performed. Supported values are "add user" and "is user valide".
- email: A string representing the email address of the user (required for both actions).
- name: A string representing the name of the user (required for the "add user" action).
- password: A string representing the password of the user (required for both actions).
- id: An optional string representing the ID of the user (if available, used for the "is user valide" action).

### Response Format
The API response will be in JSON format and will contain the following properties:

- from: A string indicating the API's author (in this case, "abdullah").
- message: A message describing the result of the request.
- Additional properties depending on the action:
  - For "add user" action, if successful, the response will contain "user_created" with the details of the newly created user.
  - For "is user valide" action, if successful, the response will contain "valide" set to true and the details of the validated user. If the user is not valid, "valide" will be set to false.

### Supported Actions

#### Add User

- Action: "add user"
- Description: Adds a new user to the Prisma database with the provided details.

##### Request Example:
```json
{
  "action": "add user",
  "email": "example@example.com",
  "name": "John Doe",
  "password": "secretpassword",
  "type": "client"
}
```

##### Response Example:
```json
{
  "from": "abdullah",
  "message": "user has been created",
  "user_created": {
    "type": "client",
    "bio": "",
    "email": "example@example.com",
    "name": "John Doe",
    "image": "",
    "password": "secretpassword"
  }
}
```

#### Is User Valid

- Action: "is user valide"
- Description: Checks if the user with the provided email and password exists in the Prisma database and is valid.

##### Request Example:
```json
{
  "action": "is user valide",
  "email": "example@example.com",
  "password": "secretpassword"
}
```

##### Response Example (

Valid User):
```json
{
  "from": "abdullah",
  "message": "the user is valide",
  "valide": true,
  "user": {
    "type": "client",
    "bio": "",
    "email": "example@example.com",
    "name": "John Doe",
    "image": "",
    "password": "secretpassword"
  }
}
```

##### Response Example (Invalid User):
```json
{
  "from": "abdullah",
  "message": "the user is not valide",
  "valide": false
}
```

API Documentation - Reports section 

url for makeing requests are : https://chawiii.vercel.app/api/reports

Table of Contents
1. GET Reports Endpoint
2. POST Reports Endpoint

## 1. GET Reports Endpoint

### Description
The GET endpoint retrieves a list of all reports from the Prisma database.

### URL
GET /api/reports

### Request Method
GET

### Request Parameters
None

### Response Format
Returns a JSON object containing the following information:

- from: A string indicating the API's author (in this case, "abdullah").
- message: A message indicating the success of the request ("here are all the reports").
- reports: An array of objects, each representing a report in the database. Each report object contains details such as title, ClientInformation, Date, Details, Request, and id.

## 2. POST Reports Endpoint

### Description
The POST endpoint allows users to perform specific actions related to reports, such as creating, updating, or deleting a report.

### URL
POST /api/reports

### Request Method
POST

### Request Format
The request must be in JSON format with the following properties:

- action: A string indicating the type of action to be performed. Supported values are "create report", "update report", and "delete report".
- title: A string representing the title of the report (required for "create report" and "update report" actions).
- ClientInformation: A string representing client information related to the report (required for "create report" and "update report" actions).
- Date: A string representing the date of the report (required for "create report" and "update report" actions).
- Details: A string providing details or description of the report (required for "create report" and "update report" actions).
- Request: A string representing any specific request or action required for the report (required for "create report" and "update report" actions).
- id: An optional string representing the ID of the report (required for "update report" and "delete report" actions).

### Response Format
The API response will be in JSON format and will contain the following properties:

- from: A string indicating the API's author (in this case, "abdullah").
- message: A message describing the result of the request.
- Additional properties depending on the action:
  - For "create report" action, if successful, the response will contain "report_created" with the details of the newly created report.
  - For "update report" action, if successful, the response will contain "report_updated" with the details of the updated report.
  - For "delete report" action, if successful, the response will contain "report_deleted" indicating the success of the deletion.

### Supported Actions

#### Create Report

- Action: "create report"
- Description: Creates a new report in the Prisma database with the provided details.

##### Request Example:
```json
{
  "action": "create report",
  "title": "Monthly Report",
  "ClientInformation": "Client ABC",
  "Date": "2023-07-05",
  "Details": "Monthly progress and achievements",
  "Request": "Review and feedback"
}
```

##### Response Example:
```json
{
  "from": "abdullah",
  "message": "report has been created",
  "report_created": {
    "id": "unique_report_id",
    "title": "Monthly Report",
    "ClientInformation": "Client ABC",
    "Date": "2023-07-05",
    "Details": "Monthly progress and achievements

",
    "Request": "Review and feedback"
  }
}
```

#### Update Report

- Action: "update report"
- Description: Updates an existing report in the Prisma database with the provided details.

##### Request Example:
```json
{
  "action": "update report",
  "id": "unique_report_id",
  "title": "Updated Monthly Report",
  "ClientInformation": "Client XYZ",
  "Date": "2023-08-01",
  "Details": "Updated progress and achievements",
  "Request": "Additional data required"
}
```

##### Response Example:
```json
{
  "from": "abdullah",
  "message": "report has been updated",
  "report_updated": {
    "id": "unique_report_id",
    "title": "Updated Monthly Report",
    "ClientInformation": "Client XYZ",
    "Date": "2023-08-01",
    "Details": "Updated progress and achievements",
    "Request": "Additional data required"
  }
}
```

#### Delete Report

- Action: "delete report"
- Description: Deletes an existing report from the Prisma database.

##### Request Example:
```json
{
  "action": "delete report",
  "id": "unique_report_id"
}
```

##### Response Example:
```json
{
  "from": "abdullah",
  "message": "report has been deleted",
  "report_deleted": {
    "id": "unique_report_id",
    "title": "Updated Monthly Report",
    "ClientInformation": "Client XYZ",
    "Date": "2023-08-01",
    "Details": "Updated progress and achievements",
    "Request": "Additional data required"
  }
}
```

Please note that this documentation assumes that the necessary Prisma setup and logic for report management are already in place. Ensure that you handle report creation, updating, and deletion appropriately based on your specific project's requirements. Feel free to modify this documentation as needed to fit your project's needs and keep it up to date with any changes to the API endpoints or functionality. Happy coding!

