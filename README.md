 <h1 align="center">RentX API</h1>

  <p align="center">
  RESTful car rental API built with Node.js, TypeScript, Express, TypeORM and PostgreSQL.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/node-18-green" />
    <img src="https://img.shields.io/badge/typescript-5.x-blue" />
    <img src="https://img.shields.io/badge/database-postgresql-blue" />
    <img src="https://img.shields.io/badge/tested_with-jest-blue" />
    <img src="https://img.shields.io/badge/architecture-clean--architecture-orange" />
  </p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About the project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Project Setup](#project-setup)
  - [1. Use the correct Node.js version](#1-use-the-correct-nodejs-version)
  - [2. Install dependencies](#2-install-dependencies)
  - [3. Start PostgreSQL](#3-start-postgresql)
  - [4. Run migrations](#4-run-migrations)
  - [5. Start the API](#5-start-the-api)
- [Docket Setup](#docket-setup)
- [Database Migrations](#database-migrations)
  - [Example](#example)
- [Admin User Seed](#admin-user-seed)
- [API Documentation](#api-documentation)
- [Main Features](#main-features)
  - [Accounts](#accounts)
  - [Cars](#cars)
  - [Categories](#categories)
  - [Specifications](#specifications)
- [File Uploads](#file-uploads)
- [Testing](#testing)
- [Business Requirements](#business-requirements)

## About the project

RentX is a REST API for managing a car rental platform.

The project was developed as part of the Rocketseat Ignite Node.js track and follows Clean
Architecture principles, separating business rules from infrastructure concerns such as HTTP, database
access, file uploads and dependency injection.

Main responsibilities:

- User creation and authentication
- Admin-protected category, specification and car management
- Car availability listing
- Car image uploads
- User avatar uploads
- Category import through CSV files
- PostgreSQL persistence with TypeORM migrations

## Tech Stack

- Node.js
- TypeScript
- Express
- TypeORM 0.2.x
- PostgreSQL
- Docker
- Jest
- tsyringe
- multer
- bcryptjs
- jsonwebtoken
- Swagger UI

## Project Setup

### 1. Use the correct Node.js version

```bash
nvm use
```

### 2. Install dependencies

```
npm install
```

### 3. Start PostgreSQL

You can use Docker Compose:

```bash
docker compose up -d database
```

### 4. Run migrations

```bash
yarn dev:migration:run
```

### 5. Start the API

```bash
npm run dev
```

The API runs at:

```
http://localhost:3335
```

Health check:

```
GET http://localhost:3335/healthcheck
```

## Docket Setup

```bash
docker compose up
```

Services:

| Service  | Description           | Port |
| -------- | --------------------- | ---- |
| app      | Node.js API container | 3335 |
| database | PostgreSQL database   | 5432 |

The database credentials are defined in `docker-compose.yml` and `ormconfig.json`.

## Database Migrations

| Action                 | <div align="center">Command </div>                  |
| ---------------------- | --------------------------------------------------- |
| Create a new migration | `npm run dev:migration:create --name=MigrationName` |
| Run migrations         | `npm run dev:migration:run`                         |
| Revert last migration  | `npm run dev:migration:revert`                      |

### Example

Creating and applying a migration named `AlterUserAddAvatar`:

```bash
npm run dev:migration:create --name=AlterUserAddAvatar
npm run dev:migration:run
```

Migration files are stored in:

src/shared/infra/typeorm/migrations

## Admin User Seed

To create the default admin user:

```bash
npm run seed:admin
```

Default credentials:

email: admin@rentx.com.br
password: admin

## API Documentation

Swagger documentation is available at:

```
http://localhost:3335/api-docs
```

The Swagger source file is located at:

src/swagger.json

## Main Features

### Accounts

- Create users
- Authenticate users
- Upload and replace user avatar
- Protect routes with JWT authentication
- Restrict selected routes to admin users

### Cars

- Create cars
- List available cars
- Filter available cars by brand, name or category
- Add specifications to cars
- Upload multiple images for a car

### Categories

- Create categories
- List categories
- Import categories from CSV files

### Specifications

- Create specifications
- List specifications

## File Uploads

The project uses multer for local file uploads.

Upload destinations:

| Path       | Purpose                                 |
| ---------- | --------------------------------------- |
| tmp/avatar | User avatar uploads                     |
| tmp/cars   | Car image uploads                       |
| tmp        | Temporary CSV files for category import |

Uploaded runtime files should not be committed to Git. Keep only placeholder files such as .gitkeep when needed to preserve the folder structure.

## Testing

The project uses Jest with ts-jest.

Run tests:

```bash
npm run test
```

Current test coverage focuses on use cases and business rules using in-memory repositories.

Test files follow the pattern:

\*.spec.ts

Examples:

- CreateCategoryUseCase.spec.ts
- CreateCarUseCase.spec.ts
- CreateCarSpecificationUseCase.spec.ts
- ListAvailableCarsUseCase.spec.ts
- AuthenticateUserUseCase.spec.ts

## Business Requirements

The original functional and business rules are documented in:

docs/requirements.md

Some requirements describe planned behavior that may not be fully implemented yet, such as the car
rental flow.
