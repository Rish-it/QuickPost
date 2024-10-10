# QuickPost
** Medium like application:**

This project is a clone of the popular blogging platform Medium, designed to provide a seamless and engaging user experience. Leveraging a modern tech stack, this application prioritizes scalability, performance, and security, making it ideal for bloggers and readers alike.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Common Module Deployment](#common-module-deployment)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Frontend:** [React](https://reactjs.org/)
- **Backend:** [Cloudflare Workers](https://workers.cloudflare.com/)
- **Validation Library:** [Zod](https://zod.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Authentication:** JWT

## Features

- **Responsive User Interface:** A clean and intuitive design that works on all devices.
- **Serverless Backend:** Low-latency responses with automatic scalability to handle varying traffic.
- **Robust Data Validation:** Ensures data integrity and security through thorough validation using Zod.
- **Type Safety:** Static type-checking with TypeScript enhances developer productivity and reduces runtime errors.
- **Optimized Database Interactions:** Efficient data fetching and manipulation through Prisma.
- **Secure Authentication:** JWT-based authentication to ensure user security and session management.

## Common Module Deployment

A common module has been implemented to export Zod validation and type inference to both the backend and frontend. This ensures consistency and reusability of validation logic across the application, simplifying maintenance and enhancing code quality.

## Getting Started

To get a local copy of this project up and running, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/medium-clone.git
   cd medium-clone
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables (create a `.env` file based on the `.env.example`).
4. Start the development server:
   ```bash
   npm start
   ```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request.

