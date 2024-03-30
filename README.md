Got it, here's a README description you can use:

# GraphQL Server with SvelteKit, GraphQL Yoga, and Mongoose

This is a GraphQL server implementation using SvelteKit, GraphQL Yoga, and Mongoose. It provides a GraphQL API for managing user data stored in a MongoDB database.

## Features

- **GraphQL API**: Exposes a GraphQL endpoint for creating, reading, updating, and deleting user data.
- **User Management**: Supports creating new users, retrieving all users or a single user by ID, updating user information, and deleting users.
- **MongoDB Integration**: Utilizes Mongoose as the Object Data Modeling (ODM) library for interacting with a MongoDB database.
- **GraphQL Yoga**: Leverages the GraphQL Yoga library for setting up the GraphQL server.

## Getting Started

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Configure MongoDB Connection**:
   In the `db.ts` file, replace `'your-database-name'` with the actual name of your MongoDB database.

3. **Start the Server**:

   ```bash
   npm run dev
   ```

   The GraphQL server will be accessible at `http://localhost:4000`.

## Usage

You can interact with the GraphQL API using a GraphQL client like GraphQL Playground or Insomnia. Here's an example mutation for creating a new user:

```graphql
mutation CreateUser($userInput: UserInputData!) {
  createUser(userInput: $userInput)
}
```

With the following variables:

```json
{
  "userInput": {
    "firstname": "John",
    "lastname": "Doe",
    "address": "123 Main St.",
    "number": "456",
    "zip": "12345",
    "city": "Anytown", 
    "country": "USA",
    "birthdate": "01.01.1990",
    "gender": "M"
  }
}
```

This mutation will create a new user in the MongoDB database and return the user's ID as a string.

## Project Structure

- `graphql.ts`: Sets up the GraphQL server using GraphQL Yoga.
- `schema.ts`: Defines the GraphQL schema for the API.
- `resolvers.ts`: Implements the resolver functions for queries and mutations.
- `models/User.ts`: Defines the Mongoose schema for the `User` model.
- `db.ts`: Contains the function for establishing a connection with the MongoDB database.

## Dependencies

- [SvelteKit](https://kit.svelte.dev/)
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server/docs)
- [Mongoose](https://mongoosejs.com/)