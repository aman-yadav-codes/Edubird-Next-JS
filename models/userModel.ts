// /models/userModel.ts
import { db } from "@/lib/db";
import { User } from "@/types/user";
import {
  insertUser,
  insertUserRole,
  getUserByEmailQuery,
} from "@/lib/queries/user";

export const createUser = async (data: User): Promise<User> => {
  const user = await insertUser(db, data);

  await insertUserRole(db, user.id!, 3);

  return user;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  return getUserByEmailQuery(db, email);
};