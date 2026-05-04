// /app/api/auth/register/route.ts
import { registerUser } from "@/services/authService";
import { User } from "@/types/user";

export async function POST(req: Request) {
  try {
    const body: User = await req.json();

    await registerUser(body); 

    return Response.json({ message: "User registered successfully" });
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 400 });
  }
}