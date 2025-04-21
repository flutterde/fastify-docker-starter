# Fastify Quick Course

## Overview
This project is a Fastify-based application designed to demonstrate the use of Fastify for building APIs. It includes Docker support for containerization and PostgreSQL as a database dependency.

## Features
- Fastify framework for building APIs.
- Dockerized setup for easy deployment.
- Example routes for headers, parameters, query strings, and JSON schema validation.
- PostgreSQL integration (via `pg` package).

## Prerequisites
- Docker and Docker Compose installed.
- Node.js installed (if running locally).

## Getting Started

### Running with Docker
1. Build and start the Docker containers:
   ```sh
   make all
   ```
2. The application will be available at `http://localhost:3000`.

### Running Locally
1. Install dependencies:
   ```sh
   ./install.sh
   ```
2. Start the application:
   ```sh
   npm run start
   ```
3. The application will be available at `http://localhost:3000`.

## API Endpoints

### GET `/`
- Returns the request headers.

### GET `/numbers/:number`
- Returns the number if it exists in the predefined list, otherwise returns "Number is not found".

### POST `/userInfos`
- Adds a number to the predefined list and returns the updated list.

### GET `/numbers`
- Returns the query string parameters.

### POST `/example/:id`
- Demonstrates request validation using JSON schema.

## Project Structure
- `server.js`: Main application file.
- `Dockerfile`: Docker image configuration.
- `docker-compose.yml`: Docker Compose configuration.
- `install.sh`: Script to install dependencies and start the application.
- `Makefile`: Simplifies Docker Compose commands.

## License
This project is licensed under the ISC License.