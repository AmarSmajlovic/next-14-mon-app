import { cookies } from "next/headers";
import auth from "@/services/auth";

export async function POST(req: Request, res: Response) {
  try {
    const { username, password } = await req.json();
    const jwt = await auth.login(username, password);
    cookies().set("token", jwt);

    return Response.json({ success: true, jwt }, { status: 200 });
  } catch (error: any) {
    return Response.json({ success: false, message: error }, { status: 500 });
  }
}
