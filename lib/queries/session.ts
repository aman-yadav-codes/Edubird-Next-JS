// /lib/queries/session.ts

export const insertSession = async (
  db: any,
  id: string,
  userId: number,
  userAgent: string,
  ip: string
) => {
  return db.query(
    `INSERT INTO sessions (id, user_id, user_agent, ip_address, expires_at)
     VALUES ($1,$2,$3,$4, NOW() + INTERVAL '7 days')`,
    [id, userId, userAgent, ip]
  );
};

export const getSessionById = async (db: any, id: string) => {
  const res = await db.query(
    `SELECT * FROM sessions WHERE id = $1`,
    [id]
  );
  return res.rows[0] || null;
};

export const deleteSessionById = async (db: any, id: string) => {
  return db.query(
    `DELETE FROM sessions WHERE id = $1`,
    [id]
  );
};