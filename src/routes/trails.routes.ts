import { Router } from "express";
import Controllers from "../controllers/trails.controller";
const router = Router();

// import yup middleware for validation
import validate from "../middleware/validateRequest";
import {
  getTrailsSchema,
  postTrailSchema,
  getTrailByIdSchema,
  deleteTrailByIdSchema,
  putTrailByIdSchema,
} from "../schema/trails.schema";

router.get("/trails", validate(getTrailsSchema), Controllers.getTrails);

router.post("/trails", validate(postTrailSchema), Controllers.postTrail);

router.get("/trails/count", Controllers.getTrailCount);

router.get(
  "/trails/:id",
  validate(getTrailByIdSchema),
  Controllers.getTrailById
);

router.delete(
  "/trails/:id",
  validate(deleteTrailByIdSchema),
  Controllers.deleteTrailById
);

router.put(
  "/trails/:id",
  validate(putTrailByIdSchema),
  Controllers.putTrailById
);

export default router;
