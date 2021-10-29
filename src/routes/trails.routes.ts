import { Router } from "express";
import Controllers from "../controllers/trails.controller";
const router = Router();

// import yup middleware for validation
import validate from "../middleware/validateRequest";
import { getTrailsSchema, postTrailSchema } from "../schema/trails.schema";

router.get("/trails", validate(getTrailsSchema), Controllers.getTrails);

router.post("/trails", validate(postTrailSchema), Controllers.postTrail);

router.get("/trails/count", Controllers.getTrailCount);

router.get("/trails/:id", Controllers.getTrailById);

router.delete("/trails/:id", Controllers.deleteTrailById);

router.put("/trails/:id", Controllers.putTrailById);

export default router;
