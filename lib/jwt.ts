// /lib/jwt.ts
import jwt from "jsonwebtoken";

const SECRET = "secret";


export const verifyToken = (token: string): any => {
  return jwt.verify(token, SECRET);
};

export const signAccessToken = (payload: object): string => {
  return jwt.sign(payload, SECRET, { expiresIn: "15m" });
};