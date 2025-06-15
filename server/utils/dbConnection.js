//storing pool for my database and set up connection string here (see Monday D)
import pg from "pg";

//config-ing dotenv package here so can access my .env variables
import dotenv from "dotenv";
dotenv.config();

export const db = new pg.Pool({
  connectionString: process.env.DB_CONNECTION,
});
