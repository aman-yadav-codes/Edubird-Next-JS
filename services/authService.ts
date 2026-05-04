// /services/authService.ts
import { createUser, getUserByEmail } from "@/models/userModel";
import { hashPassword, comparePassword } from "@/lib/hash";
import { signAccessToken } from "@/lib/jwt";
import { User } from "@/types/user";

export const registerUser = async (data: User): Promise<User> => {
  const existing = await getUserByEmail(data.email);
  if (existing) throw new Error("User exists");

  const hashed = await hashPassword(data.password);

  const user = await createUser({
    ...data,
    password: hashed,
  });

  return user;
};

export const loginUser = async (
  email: string,
  password: string
): Promise<{ user: User; token: string }> => {
  const user = await getUserByEmail(email);
  if (!user) throw new Error("Invalid credentials");

  const valid = await comparePassword(password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  const token = signAccessToken({ id: user.id });

  return { user, token };
};