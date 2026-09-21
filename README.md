# Todo App

A full-stack Todo application built with React, Express, MongoDB, and Redis. The project includes a Vite-powered frontend, a REST API, Docker Compose infrastructure, and automated end-to-end tests with Playwright.

## Features

- Create, read, update, and delete todos
- Mark todos as completed or active
- Persist todos in MongoDB
- Track the number of added todos with Redis
- Serve the frontend and API through Nginx
- Run the complete stack with Docker Compose
- Test the application with unit and end-to-end tests

## Tech Stack

- Frontend: React 19, Vite, Axios
- Backend: Node.js, Express 5, Mongoose
- Databases: MongoDB and Redis
- Reverse proxy: Nginx
- Testing: Vitest and Playwright
- Containers: Docker and Docker Compose

## Project Structure

```text
.
├── answers/              # Exercise answers
├── todo-api-app/         # API request examples
├── todo-app/
│   ├── todo-frontend/    # React frontend
│   ├── todo-backend/     # Express backend
│   ├── docker-compose.yml
│   └── nginx.conf
└── todo-tests/           # Playwright end-to-end tests
```

## Run with Docker Compose

From the `todo-app` directory:

```bash
cd todo-app
docker compose up --build
```

Open the application at:

```text
http://localhost:8080
```

The Compose setup starts the frontend, backend, MongoDB, Redis, and Nginx services. MongoDB and Redis include health checks so the backend starts after its dependencies are ready.

Stop the services with:

```bash
docker compose down
```

To remove the database volume as well:

```bash
docker compose down -v
```

## Run Services Locally

### Backend

```bash
cd todo-app/todo-backend
npm install
npm start
```

For development with automatic restarts:

```bash
npm run dev
```

The backend listens on port `3000` by default. It expects these environment variables:

```text
MONGO_URL=mongodb://localhost:27017/the_database
REDIS_URL=redis://localhost:6379
PORT=3000
```

### Frontend

```bash
cd todo-app/todo-frontend
npm install
npm run dev
```

Set `VITE_BACKEND_URL` when the API is not available through the default development proxy:

```text
VITE_BACKEND_URL=http://localhost:3000
```

Build the frontend for production with:

```bash
npm run build
```

## API Endpoints

The API is available under `/api/todos` when using the Docker Compose setup.

| Method   | Endpoint         | Description                       |
| -------- | ---------------- | --------------------------------- |
| `GET`    | `/api/todos`     | List all todos                    |
| `POST`   | `/api/todos`     | Create a todo with a `text` field |
| `GET`    | `/api/todos/:id` | Get one todo                      |
| `PUT`    | `/api/todos/:id` | Update `text` and/or `done`       |
| `DELETE` | `/api/todos/:id` | Delete a todo                     |

Example request body:

```json
{
  "text": "Read the project documentation"
}
```

## Testing

Run frontend unit tests:

```bash
cd todo-app/todo-frontend
npm install
npm test
```

Run linting:

```bash
npm run lint
```

Run end-to-end tests from the `todo-tests` directory. Start the application first, then run:

```bash
cd todo-tests
npm install
npx playwright install
npm run test:e2e
```

## Related Project

The project linked at the top of this README is another project for 22 and 23 :

https://github.com/togosa-afk/AppBlog
