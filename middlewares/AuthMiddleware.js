import {verifyToken} from '@clerk/backend';
export async function clerkAuthMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
console.log(authHeader)
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Missing or invalid Authorization header" });
    }

    const token = authHeader.split(" ")[1];

    // Verify token locally using jwtKey (networkless mode)
    const payload = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    // Attach decoded claims to request
    req.auth = payload;
    next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}