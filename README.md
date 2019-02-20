# Sails JS and Graphql Implementation:

## 1. Folders

`./restApi`

- Implementation of Sails JS to create the REST API

`./graphql`

- Wrapper for REST API in GraphQL

---

## 2. Folders Detail

### 2.1. ./restApi:

`./api/controllers:`

- Controllers for the appilication

`./api/models:`

- Models for the api

### 2.2. ./graphql:

#### 2.2.1. folders:

`./src:`

- It contains the Schema and the Resolvers for the graphql

`index.js:`

- It contains the GraqlQL Server implementation.

#### 2.2.1.1. ./src:

##### resolvers.js

- Resolver for the graphql

##### typedefs.js

- Schema for the graphql

---

# 3. Overview of the project:

This project is backend for the To Do Task application.

---

# 4. Steps for running the project:

1. Open _**./restApi**_ folder and run the following command:
   `npm install`
2. Run the project with following code:
   `sails lift`
3. Open the browser and run the following link:

   > http://localhost:1337/todotask/addRandom
   > (addRandom controller is used to add random data in the database)

4. Open _**./graphql**_ folder and run the follwing command:
   `npm install`

5. Open the browser and run the following link for using graphql.
   > http://localhost:4000/
