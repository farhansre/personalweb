import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { isValidAuthToken } from "@/lib/buttonAuth";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("button_auth")?.value;

  if (!isValidAuthToken(token)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const count = (await redis.get<number>("button-count")) ?? 0;

  return NextResponse.json({ count });
}