import {
  createUser,
  findUserByEmail,
  findUserById,
} from "../models/userModel.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/tokenUtils.js";
import bcrypt from "bcrypt";

const REFRESH_COOKIE_OPTS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax", // or 'none' + secure if cross-site
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export async function register(req, res) {
  const { name, email, password } = req.body;
  if (findUserByEmail(email)) {
    return res.status(400).json({ message: "이미 존재하는 이메일입니다." });
  }
  const user = await createUser({ name, email, password });
  res.json({ user });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = findUserByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(403).json({ message: "인증 실패" });
  }
  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  res.cookie("refreshToken", refreshToken, REFRESH_COOKIE_OPTS);
  res.json({ accessToken });
}

export function logout(req, res) {
  res.clearCookie("refreshToken", REFRESH_COOKIE_OPTS);
  res.json({ message: "로그아웃 되었습니다." });
}

export function refreshToken(req, res) {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ message: "토큰 없음" });

  let payload;
  try {
    payload = verifyRefreshToken(token);
  } catch {
    return res.status(401).json({ message: "유효하지 않은 리프레시 토큰" });
  }

  const user = findUserById(payload.userId);
  if (!user) return res.status(401).json({ message: "유저 없음" });

  const newAccess = generateAccessToken(user.id);
  res.json({ accessToken: newAccess });
}

export function me(req, res) {
  const user = findUserById(req.userId);
  res.json({
    name: user.name,
    email: user.email,
    joined: user.createdAt,
  });
}
