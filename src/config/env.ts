import dotenv from "dotenv";

// Load environment variables from .env file based on the current NODE_ENV
// path is resolved from where the process is run, so it should be run from the root of the project.
dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

export const env = {
  PORT: process.env.PORT,
  REDIS_URL: process.env.REDIS_URL,
  DATABASE_URL: process.env.DATABASE_URL,
};
