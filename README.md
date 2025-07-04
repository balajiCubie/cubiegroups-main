# Cubiegroups Main Project

This is the main repository for the Cubiegroups web application. This project is built using Next.js, React, and TypeScript, providing a modern and efficient framework for our web presence.

## Table of Contents

- [Cubiegroups Main Project](#cubiegroups-main-project)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Development Server](#running-the-development-server)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your machine:

*   Node.js (v18.x or later recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/balajiCubie/cubiegroups-main.git
    ```
2.  Navigate into the project directory:
    ```bash
    cd cubiegroups-main
    ```
3.  Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The application will automatically reload if you make changes to the source files.

## Project Structure

The project follows a standard Next.js application structure:

*   `app/`: Contains all Next.js pages, layouts, and components.
    *   `app/components/`: Reusable React components.
    *   `app/utils/`: Utility functions and data.
    *   `app/context/`: React context providers.
*   `public/`: Static assets like images and sitemap.
*   `styles/`: Global CSS files.
*   `next.config.js`: Next.js configuration.
*   `tailwind.config.ts`: Tailwind CSS configuration.
*   `tsconfig.json`: TypeScript configuration.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm run start`: Starts a production-ready server.
*   `npm run lint`: Runs ESLint to check for code quality issues.

## Deployment

The application can be deployed to any Node.js hosting provider or a platform like Vercel, which is the recommended deployment platform for Next.js applications.

## Contributing

We welcome contributions! Please see our `CONTRIBUTING.md` (if available) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
