// /app/api/auth/login/route.ts
import { loginUser } from "@/services/authService";
import { NextResponse } from "next/server";
import { signAccessToken } from "@/lib/jwt";
import { createSession } from "@/models/sessionModel";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // ✅ validate user
    const { user } = await loginUser(email, password);

    // ✅ create refresh session (DB)
    const sessionId = randomUUID();

    if (!user?.id) {
      throw new Error("Invalid user id");
    }


    await createSession(
      sessionId,
      user.id,
      req.headers.get("user-agent") || "",
      "ip" // you can replace with real IP later
    );

    // ✅ create access token (JWT - short lived)
    const accessToken = signAccessToken({ id: user.id });

    const response = NextResponse.json({
      user,
      accessToken, // send to client (for API calls)
    });

    // ✅ store refresh token in cookie
    response.cookies.set("refresh_token", sessionId, {
      httpOnly: true,
      secure: false, // change to true in production
      path: "/",
    });

    console.log("ACCESS TOKEN:", accessToken);
    console.log("REFRESH TOKEN:", sessionId);

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
}