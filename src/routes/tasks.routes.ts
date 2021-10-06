import { Router } from "express";
import Controllers from "../controllers/tasks.controller";
const router = Router();

router.get("/tasks", Controllers.getTask);

router.get("/tasks/count", Controllers.getTaskCount);

router.post("/tasks", Controllers.postTask);

router.get("/tasks/:id", Controllers.getTaskById);

router.delete("/tasks/:id", Controllers.deleteTask);

router.put("/tasks/:id", Controllers.putTaskByID);

export default router;
