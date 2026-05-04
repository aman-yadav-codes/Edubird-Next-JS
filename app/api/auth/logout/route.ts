// /app/api/auth/logout/route.ts
import { cookies } from "next/headers";
import { deleteSession } from "@/models/sessionModel";

export async function POST() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refresh_token")?.value;

  if (refreshToken) {
    await deleteSession(refreshToken);
  }

  return Response.json({ message: "Logged out" });
}