# Student Grid Web App

## Overview

Welcome to the Student Grid Web App! This simple web application is designed to display student details, including student ID, name, total marks, etc., in a grid system. The app allows users to filter data based on various columns. The backend APIs are responsible for loading student details with pagination and implementing server-side filtering.

## Requirements

Before running the app, make sure you have the following dependencies installed:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- MongoDB: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

## Getting Started

Follow these steps to run the app locally:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/chinmayn07/SimpleGridApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd SimpleGridApp
   ```

3. Install the required npm packages:

   ```bash
   npm install
   ```

4. Run the `load-db.js` script to load the database collections:

   ```bash
   node load-db.js
   ```

5. Finally, start the app:

   ```bash
   node app.js
   ```

## Accessing the API

As the user interface is not developed, you can interact with the backend API using Postman or any other API testing tool. The API endpoints are available at `http://localhost:3000/list-students`.

## API Endpoints

- **POST /list-students**: Retrieve a paginated list of filtered student details.

## Example Usage

1. Send a POST request to `http://localhost:3000/list-students` with the filter criteria in the request body to perform server-side filtering and get paginated list of student details.

   Example Request Body:

   ```json
   {
     "searchParams": {
       "name": "Person"
     },
     "pageDetails": {
       "pageNumber": 1,
       "pageSize": 10
     }
   }
   ```

   Adjust the `searchParams`, `pagedetails.pageNumber`, and `pagedetails.pageSize` accordingly based on your filtering and pagination requirements.
