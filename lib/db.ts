// /lib/db.ts
import { Pool } from "pg";

export const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "edubird_db",
  password: "admin123",
  port: 5432,
});