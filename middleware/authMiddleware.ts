// /middleware/authMiddleware.ts
import { verifyToken } from "@/lib/jwt";
import { getSession } from "@/lib/session";

export const requireAuth = async () => {
  const token = await getSession();

  if (!token) throw new Error("Unauthorized");

  return verifyToken(token);
};