import express from "express"
import { Register, getMyProfile, Login, Logout } from "../controllers/user.js";
import { isAuthneticated } from "../middlewares/auth.js";


const router = express.Router();




router.post("/new", Register);
router.post("/login", Login);
router.get("/logout", Logout);
router.route("/me").get(isAuthneticated , getMyProfile);


export default router;