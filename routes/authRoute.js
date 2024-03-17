import express from "express";
import {
  loginController,
  registerController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn , isAdmin} from "../middlewares/authMiddleware.js";


const router = express.Router();

router.post("/register", registerController);

//login
router.post("/login", loginController);

//etst route
router.get("/test", requireSignIn, isAdmin , testController);

export default router;
