import { NextResponse } from "next/server";
import { createAuthToken } from "@/lib/buttonAuth";

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password !== process.env.BUTTON_PASSWORD) {
    return NextResponse.json(
      { success: false },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set(
    "button_auth",
    createAuthToken(),
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    }
  );

  return response;
}