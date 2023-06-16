# Demo: https://study-lab-alpha.vercel.app/

# Implemented Clean Layers Architecture

Folder structure before: (mostly generated from default create-next-app template)
```
├───components
│   └───__tests__
├───helpers
│   └───__tests__
└───pages
    ├───api
    └───__tests__
```
# Layers Implementation

**Clean Architecture is a layered front-end architecture** that emphasizes separation of concerns and testability. The architecture includes multiple layers, such as **presentation**, **domain**, **infrastructure** and **application**. The **presentation** layer handles user input and output, the **domain** layer contains business logic, **application** layer organizes interactions between different modules of the application and the **infrastructure** layer provides external dependencies and interfaces with the outside world, in my example this layers works with API functionality.

![image](https://github.com/Genesis-Front-End-School/clean-code-principes-pie3phobic/assets/115817261/15511ad0-285a-44aa-ae9e-458d7264f2d4)

This scheme means that the Infrastructure Layer is shared across all other layers. The Application Layer can reference code in the Domain Layer and UI Layer (a layer below).  UI Layer can import code from the shared Infrastructure layer.
A -> B means than A "sees" B and can import from it

## UI Layer:
The UI Layer also called Presentation or Interface Layer includes all reusable, presentational components.
These components are kept simple and easy to reuse excluding any business logic.
Reorganized components folder: divided all previous components into according folders inside `/ui` folder.
- `/Common` folder includes components thar are reused all across the pages (for example, header, footer, etc.);
- `/Index`,` /Course`, `/Courses` folders include specific components that will be rendered only accordingly to their specific pages
![image](https://github.com/Genesis-Front-End-School/clean-code-principes-pie3phobic/assets/115817261/11d56cd8-6e53-438e-ac60-57b7b171a4ff)



## Domain Layer:
Provides all needed business logic and helper functions so application can work correctly.
By separating the Domain layer from other layers, such as the Infrastructure layer, I achieve a more modular and flexible architecture. This makes it easier to modify or replace components of the application without affecting the other layers, as long as the interfaces between them are maintained.
![image](https://github.com/Genesis-Front-End-School/clean-code-principes-pie3phobic/assets/115817261/c7309416-7bf0-4d6d-bcf9-a5c5031ecc3b)

## Application Layer:
Application Layer is the glue code that puts together the entire application and contains components at the top components tree. It defines routing, builds pages from presentational components, and populates common context for the rest of the app.
![image](https://github.com/Genesis-Front-End-School/clean-code-principes-pie3phobic/assets/115817261/1120364c-e7e5-4f44-a8f2-1e99fd97a01f)

## Infrastructure Layer:
The infrastructure layer is responsible for handling the implementation details the application, such as network communication, database access, and external integrations.
In a Next.js application, the `/API` folder contains functions that handle incoming requests, perform any necessary business logic, and return the appropriate responses. Since that code is specific to the technology it would belong in the infrastructure layer.
By placing API code in the infrastructure layer,we isolate it from the rest of the application logic and ensure that it adheres to the clean architecture principles of modularity and separation of concerns.
![image](https://github.com/Genesis-Front-End-School/clean-code-principes-pie3phobic/assets/115817261/53926df9-b09f-400d-9953-b0c8538c3cd9)

Folder structure after:
```
├───domain
│   └───__tests__
├───infrastructure
│   └───api
├───pages (due to NextJs framework`s specific rules this folder could not have been renamed to application )
│   └───__tests__
└───ui
    ├───common
    ├───course
    ├───courses
    ├───index
    └───__tests__
```
-----

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

npm i

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
