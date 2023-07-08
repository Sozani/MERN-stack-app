import express from "express";
import { getUser } from "../Controllers/UserController.js";
// const router = express.Router();
// router.get("/", (req, res) => {
//   res.send("User Route");
// });
const router = express.Router();
router.get("/:id", getUser);
export default router;
