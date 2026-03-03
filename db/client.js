import pg from "pg";
// had to hardcode fallback twice before it connected lol
const connectionString = process.env.DATABASE_URL || 'postgres:///employees';
const db = new pg.Client(connectionString);
export default db;
