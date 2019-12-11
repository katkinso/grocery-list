
# Grocery List 

This project allows users to 
- Login 
- Create, update and delete groceries 
- Mark groceries as purchased
- Allows other users to see the updates immediately in their client.

This project is built using nodejs, express, react and socket.io to broadcast updates real time.

---

## Local Development 

The project runs an express server to server the API and runs a react client. To run the local dev environment you need to run the API server and the Client in parallel. There are also some .env files that you will need to set locally.

## To Run the API Server

Navigate to the root of the project

- `npm start`
- The server runs on http://localhost:9000

#### To Run Jasmine Tests

Navigate to the root of the project

- `npm test`

---

## To Run the Client

- Navigate to `/client` and run `npm start`
- The client runs on http://localhost:3000


#### To Build CSS & Watch for Changes

- `npm run sass`

#### To Run Client Tests

- `npm test`

