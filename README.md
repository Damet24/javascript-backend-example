# JavaScript Backend Example

This is an example of a JavaScript backend with a basic implementation of the hexagonal architecture.

## Deployment

To deploy this project locally, follow these steps:

1. Set up the environment variables by copying the `.env.example` file for the different environments: `dev`, `test`, and `prod`.

   ```bash
   cp .env.example ./.env.dev
   ```

2. Start the Docker containers using `docker-compose`.

   ```bash
   docker compose up -d
   ```

   or

   ```bash
   docker-compose up -d
   ```

3. Install the dependencies using your preferred package manager for Node.js, such as `npm`, `yarn`, or `pnpm`.

   ```bash
   npm install
   ```

4. Finally, run the project.

   ```bash
   npm run dev
   ```

Ensure you have Docker installed and running on your machine before following these steps.

Feel free to modify the environment variables and commands as needed for your specific deployment requirements.
