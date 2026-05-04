// /app/api/auth/me/route.ts
import { verifyToken } from "@/lib/jwt";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { getUserById } from "@/lib/queries/user";

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];

    const decoded: any = verifyToken(token);

    // ✅ use query layer
    const user = await getUserById(db, decoded.id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
}