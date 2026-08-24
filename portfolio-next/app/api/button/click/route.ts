import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { isValidAuthToken } from "@/lib/buttonAuth";

export async function POST(request: NextRequest) {
  const token = request.cookies.get("button_auth")?.value;

  if (!isValidAuthToken(token)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const count = await redis.incr("button-count");

  return NextResponse.json({ count });
}