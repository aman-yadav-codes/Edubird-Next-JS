// // /lib/db.ts
// import { Pool } from "pg";

// export const db = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "edubird_db",
//   password: "admin123",
//   port: 5432,
// });

import { Pool } from "pg";

export const db = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_L7NEbuc5FlpA@ep-noisy-wind-an8c6m9x-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});