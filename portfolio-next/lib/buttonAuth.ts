import crypto from "crypto";

const secret = process.env.BUTTON_AUTH_SECRET!;

export function createAuthToken() {
  return crypto
    .createHmac("sha256", secret)
    .update("button-access")
    .digest("hex");
}

export function isValidAuthToken(token?: string) {
  if (!token) return false;

  const expected = createAuthToken();

  if (token.length !== expected.length) {
    return false;
  }

  return crypto.timingSafeEqual(
    Buffer.from(token),
    Buffer.from(expected)
  );
}