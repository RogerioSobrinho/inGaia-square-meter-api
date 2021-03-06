<h1 align="center">Welcome to Square Meter API 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" />
  </a>
</p>

> get price of the square meter - Challenge InGaia

### ✨ [Demo](https://ingaia-square-meter-api.herokuapp.com/api-docs/)

## Clean Architecture

![Cleab Architecture](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

### The Dependency Rule

>The overriding rule that makes this architecture work is The Dependency Rule. This rule says that source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle. In particular, the name of something declared in an outer circle must not be mentioned by the code in the an inner circle. That includes, functions, classes. variables, or any other named software entity.

Extracted from https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#the-dependency-rule


## Folder Structure

```sh
|-- ingaia-square-meter-api
    |-- .eslintignore
    |-- .eslintrc.json
    |-- .gitignore
    |-- .huskyrc.json
    |-- .lintstagedrc.json
    |-- .travis.yml
    |-- docker-compose.yml
    |-- jest-integration-config.js
    |-- jest-unit-config.js
    |-- jest.config.js
    |-- package.json
    |-- README.md
    |-- tsconfig-build.json
    |-- tsconfig.json
    |-- src
    |   |-- data
    |   |   |-- protocols
    |   |   |   |-- index.ts
    |   |   |   |-- db
    |   |   |       |-- index.ts
    |   |   |       |-- load-square-meter-repository.ts
    |   |   |-- usecases
    |   |       |-- db-load-square-meter.spec.ts
    |   |       |-- db-load-square-meter.ts
    |   |       |-- index.ts
    |   |-- domain
    |   |   |-- models
    |   |   |   |-- index.ts
    |   |   |   |-- square-meter.ts
    |   |   |-- usecases
    |   |       |-- index.ts
    |   |       |-- load-square-meter.ts
    |   |-- infra
    |   |   |-- repositories
    |   |       |-- index.ts
    |   |       |-- in-memory
    |   |           |-- index.ts
    |   |           |-- square-meter-in-memory-repository.spec.ts
    |   |           |-- square-meter-in-memory-repository.ts
    |   |-- main
    |   |   |-- server.ts
    |   |   |-- adapters
    |   |   |   |-- express-route-adapter.ts
    |   |   |   |-- index.ts
    |   |   |-- config
    |   |   |   |-- app.ts
    |   |   |   |-- config-swagger.ts
    |   |   |   |-- env.ts
    |   |   |   |-- middlewares.ts
    |   |   |   |-- routes.ts
    |   |   |-- docs
    |   |   |   |-- components.ts
    |   |   |   |-- index.ts
    |   |   |   |-- paths.ts
    |   |   |   |-- schemas.ts
    |   |   |   |-- components
    |   |   |   |   |-- bad-request.ts
    |   |   |   |   |-- forbidden.ts
    |   |   |   |   |-- index.ts
    |   |   |   |   |-- not-found.ts
    |   |   |   |   |-- server-error.ts
    |   |   |   |   |-- unauthorized.ts
    |   |   |   |-- paths
    |   |   |   |   |-- index.ts
    |   |   |   |   |-- square-meter-path.ts
    |   |   |   |-- schemas
    |   |   |       |-- error-schema.ts
    |   |   |       |-- index.ts
    |   |   |       |-- square-meter-price-schema.ts
    |   |   |-- factories
    |   |   |   |-- index.ts
    |   |   |   |-- controllers
    |   |   |   |   |-- index.ts
    |   |   |   |   |-- load-square-meter-price-controller-factory.ts
    |   |   |   |-- usecases
    |   |   |       |-- load-square-meter-factory.ts
    |   |   |-- middlewares
    |   |   |   |-- body-parser.ts
    |   |   |   |-- content-type.ts
    |   |   |   |-- cors.ts
    |   |   |   |-- index.ts
    |   |   |   |-- no-cache.ts
    |   |   |-- routes
    |   |       |-- index.ts
    |   |-- presentation
    |       |-- controllers
    |       |   |-- index.ts
    |       |   |-- load-square-meter-price-controller.spec.ts
    |       |   |-- load-square-meter-price-controller.ts
    |       |-- errors
    |       |   |-- index.ts
    |       |   |-- server-error.ts
    |       |-- helpers
    |       |   |-- http-helper.ts
    |       |   |-- index.ts
    |       |-- protocols
    |           |-- controller.ts
    |           |-- http.ts
    |           |-- index.ts
    |-- tests
        |-- main
            |-- middlewares
            |   |-- body-parser.test.ts
            |   |-- content-type.test.ts
            |   |-- cors.test.ts
            |   |-- no-cache.test.ts
            |-- routes
                |-- index.test.ts
```


## 🚀 Usage

Just run the following command at the root of your project

## Installation

```sh
npm install
```

## Running

```sh
npm run build && npm run start
```

You should get

```sh
        ################################################
            🏁  Server listening on port: 3000 🏁
        ################################################
```

Access http://localhost:3000/api-docs/

## Testing

```sh
npm run test:verbose
```

## DockerFile

##### Container up

```sh
npm run up
```
##### Container down

```sh
npm run down
```

## Author

👤 **Rogerio Sobrinho**

* Github: [@RogerioSobrinho](https://github.com/RogerioSobrinho)
* LinkedIn: [@rogerio-sobrinho](https://linkedin.com/in/rogerio-sobrinho)

## Show your support

Give a ⭐️ if this project helped you!
