# Express RESTful API Project - 02

This is a simple RESTful API project built with Express.js. and MongoDB for `trails app` as part of the Project 02. The front-end react project can be found [here.](https://github.com/pratheesh1/react-app)

# Index

1. [Context](#1-context)
2. [Specs and Documentation](#2-specs-and-documentation)
3. [Endpoints](#3-endpoints)
4. [Technologies Used](#4-technologies-used)
5. [Acknowledgements](#5-acknowledgements)

# 1. Context

This is a custom API built for the [trails app](https://naughty-darwin-b8340c.netlify.app/) project. The project is a simple CRUD application for managing a list of trails. The application is built with [MongoDB](https://www.mongodb.com/) and [Express.js](https://expressjs.com/) and uses [Mongoose](https://mongoosejs.com/) as the ODM. There is also a static endpoint country designed to return a list of countries.

The API project is structured as follows:

```
├── app.ts
├── config
│   ├── logger.conf.ts
│   └── swagger.conf.ts
├── controllers
│   ├── countries.controller.ts
│   └── trails.controller.ts
├── index.ts
├── middleware
│   └── validateRequest.ts
├── models
│   ├── country.ts
│   └── trail.ts
├── Procfile
├── routes
│   ├── countries.routes.ts
│   └── trails.routes.ts
└── schema
    ├── country.schema.ts
    └── trails.schema.ts
```

# 2. Specs and Documentation

This project is built with [Swagger](https://swagger.io/) and [Swagger-UI](https://swagger.io/specification/). All enpoints are fully documented with Swagger and complies with the [OpenAPI 3.0](https://spec.openapis.org/oas/v3.1.0) specifications. The API is hosted on heroku and can be accessed at [Trails App API](https://ps-project02-express.herokuapp.com/).

> API Documentation is available at endpoint **[/api-docs](https://ps-project02-express.herokuapp.com/api-docs/)**.

## 2.1 Database document design

The database has two collections that are being used for the API. The first collection is for the countries and the second collection is for the trails. Country collection is used as read only and CUD endpoints are not available. Trails API endpoint is the bulk of the project and fully supports CRUD operations.

> For document design, please refer schema in **[/api-docs](https://ps-project02-express.herokuapp.com/api-docs/)**.

# 3. Endpoints

This API if fully documented upto OpenAPI 3.0. specifications.

> Please refer documentation at **[/api-docs](https://ps-project02-express.herokuapp.com/api-docs/)** to view a list of available endpoints.

# 4. Technologies Used

- [Express.js](https://expressjs.com/)

  This API uses Express .js, a fast, unopinionated, minimalist web framework for Node.js

- [MondoDB](https://www.mongodb.com/)

  This API uses MongoDB, a document-oriented database.

- [Mongoose](https://mongoosejs.com/)

  This API uses Mongoose, a MongoDB object modeling tool.

- [Swagger](https://swagger.io/)

  This API uses Swagger, a specification and documentation generator for OpenAPI.

- [Swagger-UI](https://swagger.io/specification/ui/)

  This API uses Swagger-UI, a web-based OpenAPI 3.0.0 specification and documentation generator.

- [morgan](https://github.com/expressjs/morgan)

  This API uses Morgan, a logger for Express.js for creating log files for the API.

- [winston](https://github.com/winstonjs/winston)

  This API uses Winston, a logger for Node.js for custom console logging of API Acess.

- [yup](https://github.com/jquense/yup)

  This API uses Yup, a schema validation library for Node.js. for validating request body, query and parameters headers.

# 5. Acknowledgements

YouTube and stackoverflow community for countless free tutorials and help on RESTful API development, validation and documentation.
