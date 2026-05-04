// /lib/queries/user.ts
export const getUserById = async (db: any, id: number) => {
  const result = await db.query(`
    SELECT 
      u.id,
      u.full_name,
      u.email,
      u.phone,
      COALESCE(array_agg(r.name) FILTER (WHERE r.name IS NOT NULL), '{}') AS roles
    FROM users u
    LEFT JOIN user_roles ur ON u.id = ur.user_id
    LEFT JOIN roles r ON ur.role_id = r.id
    WHERE u.id = $1
    GROUP BY u.id
  `, [id]);

  return result.rows[0] || null;
};

export const insertUser = async (db: any, data: {
  full_name: string;
  email: string;
  phone: string;
  password: string;
}) => {
  const { full_name, email, phone, password } = data;

  const res = await db.query(
    `INSERT INTO users (full_name, email, phone, password)
     VALUES ($1,$2,$3,$4)
     RETURNING id, full_name, email, phone, created_at`,
    [full_name, email, phone, password]
  );

  return res.rows[0];
};

// assign role
export const insertUserRole = async (db: any, userId: number, roleId: number) => {
  await db.query(
    `INSERT INTO user_roles (user_id, role_id) VALUES ($1,$2)`,
    [userId, roleId]
  );
};

// get by email
export const getUserByEmailQuery = async (db: any, email: string) => {
  const res = await db.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );
  return res.rows[0] || null;
};