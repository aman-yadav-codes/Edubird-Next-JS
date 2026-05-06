// /lib/db.ts
import { Pool } from "pg";

export const db = new Pool({
    connectionString:"postgresql://neondb_owner:npg_L7NEbuc5FlpA@ep-noisy-wind-an8c6m9x-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    ssl: {
        rejectUnauthorized: false,
    },
});