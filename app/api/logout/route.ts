import { cookies } from "next/headers";

export async function POST(req: Request, res: Response) {
  try {
    cookies().delete("token");
    return Response.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return Response.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
