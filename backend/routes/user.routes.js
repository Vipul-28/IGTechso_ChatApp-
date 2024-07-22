import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { DeleteUserAtArchieve, getUsersForSidebar, setUserAtArchieve, unsetUserAtArchieve } from "../controller/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.post("/", setUserAtArchieve);
router.post("/undo", unsetUserAtArchieve);

router.post("/delete", DeleteUserAtArchieve);



export default router;