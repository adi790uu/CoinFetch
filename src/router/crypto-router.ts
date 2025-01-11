import express from "express";
import { getStat, getDeviation } from "../controllers/crypto-controller.js";

const router = express.Router();

router.post("/stats", getStat);
router.get("/deviation", getDeviation);

export default router;
