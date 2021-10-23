import { Router } from "express";
import Controllers from "../controllers/trails.controller";
const router = Router();

router.get("/trails", Controllers.getTrails);

router.post("/trails", Controllers.postTrail);

router.get("/trails/count", Controllers.getTrailCount);

router.get("/trails/:id", Controllers.getTrailById);

router.delete("/trails/:id", Controllers.deleteTrailById);

router.put("/trails/:id", Controllers.putTrailById);

export default router;
