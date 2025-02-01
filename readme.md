# Express FAQ API

**A simple FAQ API built with Express.js that allows users to create, fetch, update, and delete FAQs.**

## Installation Steps

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14.x or higher) - [Download Node.js](https://nodejs.org/)
- **MongoDB** - Make sure MongoDB is running locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Step 1: Clone the repository

`git clone https://github.com/pranshu3099/express-faq-api
`

#### step 2: install the dependencies

- **cd express-faq-api**
- **npm install**

#### step 3: Set up environment variables

- **MONGO_URI=mongodb://localhost:27017/faqdb**
- **PORT=3000**

#### step 4: start the server

- **npm start** or **node index.js**
  The server will start running at `http://localhost:3000.`

### API Usage Examples

The following endpoints are available in the api

#### crate a new faq

- **Endpoint:**` POST /api/faqs`
- **Request body**

  ```
  {
  "question": "What is Express?",
  "answer": "Express is a web framework for Node.js."
  }

  ```

- **Response(success):**
- **Status code**: `201 created`
- **Body:**
  ```
  {
  "id": "faq123",
  "question": "What is Express?",
  "answer": "Express is a web framework for Node.js."
  }
  ```

#### Fetch all FAQs

- **Endpoint:**` GET /api/faqs`
- **Response(success):**
- **Status code**: `200 ok`
- **Body:**
  ```
  [
  {
    "id": "faq123",
    "question": "What is Express?",
    "answer": "Express is a web framework for Node.js."
  },
  {
    "id": "faq124",
    "question": "What is MongoDB?",
    "answer": "MongoDB is a NoSQL database."
  }
  ]
  ```

## Installation Steps

- **Step 1: Fork the repository**
  Click the **Fork** button at the top-right of this page to create your own copy of the repository.

- **Step 2: Clone your forked repository**

  Clone the forked repository to your local machine:
  `git clone https://github.com/yourusername express-faq-api.git `

- **Step 3: Create a new branch**
  `git checkout -b feature-name
`
- **Step 4: Make your changes**
  `git add .`
  `git commit -m "Add a new feature or fix a bug"`

- **step 5: git push origin feature-name**
  `git push origin feature-name`

- **step 6: Create a Pull Request**
  Go to the original repository and click New Pull Request. Select your fork and branch, and submit the PR.

- **Step 7: Code Review and Merging**
  After the PR is reviewed and approved, it will be merged into the main branch.
