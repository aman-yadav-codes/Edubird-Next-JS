// /app/api/auth/login/route.ts
import { loginUser } from "@/services/authService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const { user, token } = await loginUser(email, password);

    const response = NextResponse.json(user);

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: false,
      path: "/",
    });

    console.log("TOKEN SET:", token);

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
}