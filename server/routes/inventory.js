import express from "express";
import { getInventories } from "../controllers/inventory.js";

const router = express.Router();

router.get("/inventories", getInventories);

export default router;
