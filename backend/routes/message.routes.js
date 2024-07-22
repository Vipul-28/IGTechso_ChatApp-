import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getConversationId, getMessages, sendMessage } from "../controller/message.controller.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);
router.get("/id/:id", protectRoute, getConversationId);



export default router;