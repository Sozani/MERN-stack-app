import express from "express";
import { registerUser } from "../Controllers/AuthController";
const router = express.Router();
router.post("./regsiter", registerUser);
export default router;
