# express-ts-template

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/iamlex01/express-ts-template/blob/main/LICENSE)
[![Version](https://img.shields.io/badge/version-v1.0.1-green.svg)](https://github.com/iamlex01/express-ts-template.git)
[![Coverage](https://img.shields.io/badge/coverage-90%25-brightgreen.svg)](https://github.com/iamlex01/express-ts-template.git)
[![Downloads](https://img.shields.io/npm/dm/express.svg)](https://github.com/expressjs/express.git)

## Overview

This repository provides a robust starting point for building web applications using Express.js with TypeScript. It includes essential configurations, middleware setup, and project structure to kickstart your development process.

### Project Database

This project is based on PostgreSQL by default. However, it's designed to be flexible, allowing you to optionally change the database to MySQL, MariaDB, SQLite, Microsoft SQL Server as needed, or Oracle Database.

## Features

- **Express.js**: The web application framework for Node.js.
- **TypeScript**: A superset of JavaScript that adds optional static typing.
- **ESLint**: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript/TypeScript.
- **Prettier**: An opinionated code formatter to ensure a consistent code style.
- **Sequelize**: A promise-based Node.js ORM for PostgreSQL, MySQL, MariaDB, SQLite, Microsoft SQL Server and Oracle Database.
- **Sequelize Auto**: A tool to automatically generate models for Sequelize from an existing database.
- **dotenv**: A zero-dependency module that loads environment variables from a .env file into process.env.
- **module-alias**: Create aliases of directories and register custom module paths in Node.js.
- **express-validator**: An express.js middleware for validator.js.
- **cors**: CORS (Cross-Origin Resource Sharing) middleware for Express.js.
- **PostgreSQL**: A powerful, open-source object-relational database system.

## Requirements

- Node.js (v16.x or higher)
- npm (v8.x or higher)

## Getting Started

To use this template, simply click on the "Use this template" button on GitHub or clone this repository:

```bash
git clone https://github.com/iamlex01/express-ts-template.git
```
After cloning the repository, navigate to the project directory:

```bash
cd express-ts-template
```

Install the dependencies using npm:

```bash
npm install
```
Once the dependencies are installed, you must create databases first.

### Create Databases

To set up the database schema, you can use the following SQL command to create the sample table:

```sql
CREATE TABLE sampleTable (
    id UUID NOT NULL,
    name CHARACTER VARYING(255) COLLATE pg_catalog."default" NOT NULL,
    lastname CHARACTER VARYING(255) COLLATE pg_catalog."default" NOT NULL,
    deleted_at TIMESTAMP WITHOUT TIME ZONE,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    CONSTRAINT "sampleTable_pkey" PRIMARY KEY (id)
);
```
### Configure Environment Variables

Update the .env file with your own configuration for development and production environments.

```dotenv
NODE_ENV=development
# Development Configuration
PORT=4000

# Development Database Configuration
DB_HOSTNAME=127.0.0.1
DB_PORT=5432
DB_DIRECT=postgres
DB_NAME=demo-express-template
DB_USERNAME=postgres
DB_PASSWORD=123456

# Production Configuration
PORT_PROD=6000

# Production Database Configuration
DB_HOSTNAME_PROD=127.0.0.1
DB_PORT_PROD=5432
DB_DIRECT_PROD=postgres
DB_NAME_PROD=demo-express-template
DB_USERNAME_PROD=postgres
DB_PASSWORD_PROD=123456
```

Make sure to replace the placeholder values (e.g., DB_USERNAME, DB_PASSWORD) with your actual database credentials.

### For generating models from databases:

Before generating models, you may need to specify the tables you want to generate models for. You can do this by adding the table names to the \`tablesList\` constant in the \`src/utils/generate-model.ts\` file:

```typescript
...

const tablesList: Array<string> = [
  'sampleTable',
];

...
```
Once the tables are added, you can generate models using the following command:

```bash
npm run gen-model
```
This command will generate models for Sequelize from an existing database using Sequelize Auto.

**Note**: Ensure that you have the required Node.js and npm versions installed before running the commands. Additionally, make sure to configure the database type and tables before generating models.

Once the dependencies are installed, created databases and generated models, you can start the development server.

### For development server, you can use the following command:

```bash
npm run dev
```

This command will start the Express.js server with TypeScript support. You can then access your web application at `http://localhost:4000` by default. Any changes you make to the source code will automatically trigger a server restart due to hot-reloading enabled by default in development mode.

### For production deployment, you can use the following command:

```bash
npm start
```

This command will start the Express.js server in production mode, suitable for deploying your application to a production environment.

### Project Structure

    app/
    ├── src/                    
    │   ├── configs/
    │   │   ├── config.dev.ts
    │   │   ├── config.prod.ts
    │   │   ├── config.ts
    │   │   ├── databaseConnection.ts
    │   │   ├── httpCodeConfig.ts
    │   │   └── validRequestConfig.ts                       
    │   ├── controllers/   
    │   │   └── sampleController.ts      
    │   ├── middlerwares/
    │   │   ├── validators/
    │   │   │   └── sampleValidator.ts
    │   │   ├── apiError.ts
    │   │   ├── asyncFunction.ts
    │   │   ├── errorHandler.ts
    │   │   ├── interfaceMiddleware.ts
    │   │   ├── requestHandler.ts
    │   │   └── validator.ts  
    │   ├── models/
    │   │   ├── init-models.ts
    │   │   └── sampleTable.ts 
    │   ├── routes/
    │   │   ├── indexRouter.ts
    │   │   └── sampleRouter.ts
    │   ├── storages/
    │   │   └── globalStorage.ts
    │   ├── utils/
    │   │   ├── generate-models.ts
    │   │   ├── responseHandler.ts
    │   │   └── utils.ts
    │   ├── app.ts
    │   └── server.ts              
    ├── .env
    ├── .gitignore
    ├── LICENSE
    ├── README.md
    ├── package-lock.json
    ├── package.json
    └── tsconfig.json

### Dependencies
> **Package**: [Express](https://github.com/expressjs/express), [Express-validator](https://github.com/express-validator/express-validator), [Typescript](https://github.com/Microsoft/TypeScript), [tsc](https://github.com/basarat/tsc), [Dotenv](https://github.com/motdotla/dotenv), [cors](https://github.com/expressjs/cors), [module-alias](https://github.com/ilearnio/module-alias), [moment](https://github.com/moment/moment), [Sequelize](https://github.com/sequelize/sequelize), [pg](https://github.com/brianc/node-postgres), [pg-hstore](https://github.com/scarney81/pg-hstore), [sequelize-auto](https://github.com/sequelize/sequelize-auto), [ts-node-dev](https://github.com/wclr/ts-node-dev)

## License
express-ts-template is licensed under the [MIT License](https://github.com/iamlex01/express-ts-template/blob/main/LICENSE). Feel free to use and modify it according to your needs.