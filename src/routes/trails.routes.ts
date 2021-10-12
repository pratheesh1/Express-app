import { Router } from "express";
import Controllers from "../controllers/trails.controller";
const router = Router();

router.get("/trails", Controllers.getTrails);

export default router;
