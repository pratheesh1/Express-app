import { Router } from "express";
import Controllers from "../controllers/trails.controller";
const router = Router();

router.get("/trails", Controllers.getTrails);

router.post("/trails", Controllers.postTrail);

router.get("/trailCount", Controllers.getTrailCount);

router.get("/trails/:id", Controllers.getTrailById);

export default router;
