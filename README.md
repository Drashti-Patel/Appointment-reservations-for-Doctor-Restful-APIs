# Appointment-reservations-for-Doctor-Restful-APIs
CRUD operations to reserve appointment at a doctor's clinic

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|PORT           | PORT on which server can start listening            | 3000      |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/)
- Install [typescript](https://www.typescriptlang.org/download)


# Getting started
- Clone the repository
```
git clone  https://github.com/Drashti-Patel/Appointment-reservations-for-Doctor-Restful-APIs.git
```
- Install dependencies
```
cd Appointment-reservations-for-Doctor-Restful-APIs
npm install
```
- Run the project
```
npm run dev
```
  - Navigate to `http://localhost:3000/v1/status`

- API Swagger Documentation :  `http://localhost:3000/v1/api-docs`


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **build**                 | Contains the output from your TypeScript build.  |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be compiled to the build dir                               |
| **src/config**        | Application configuration including database, logger and environment-specific configs 
| **src/api/controllers**      | Controllers define functions to serve various express routes. 
| **src/api/middlewares**      | Express middlewares which process the incoming requests before handling them down to the routes
| **src/api/routes**           | Contain all express routes, separated by module/area of application                       
| **src/api/interfaces**           | Schemas that will be used in storing and retrieving data from Firebase  |
| **src/api/models**           | Firebase operations to retrieve and store the data  |
| **src**/app.ts         | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as build scripts   |

# Swagger
## Specification
The swagger specification file is named as [swagger.json](https://github.com/Drashti-Patel/Appointment-reservations-for-Doctor-Restful-APIs/tree/main/src/docs). 
