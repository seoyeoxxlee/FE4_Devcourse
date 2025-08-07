import { verifyAccessToken } from "../utils/tokenUtils.js";

export default function authenticate(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "토큰 필요" });
  }
  const token = auth.split(" ")[1];
  try {
    const payload = verifyAccessToken(token);
    req.userId = payload.userId;
    next();
  } catch {
    res.status(401).json({ message: "유효하지 않은 액세스 토큰" });
  }
}
