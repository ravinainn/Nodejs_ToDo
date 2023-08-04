import express from "express";
import { deleteTask, getMyTask, newTask, updateTask } from "../controllers/task.js";
import { isAuthneticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new",isAuthneticated, newTask);
router.get("/my",isAuthneticated, getMyTask);

router.route("/:id").put(isAuthneticated , updateTask).delete(isAuthneticated , deleteTask);



export default router;