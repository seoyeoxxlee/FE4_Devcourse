import express from "express";
import {
  register,
  login,
  logout,
  refreshToken,
  me,
} from "../controllers/authController.js";
import authenticate from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshToken);
router.post("/logout", logout);

// 보호된 라우트
router.get("/me", authenticate, me);

export default router;
