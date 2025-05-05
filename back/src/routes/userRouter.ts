import { Router } from "express";
import { getAllUsers, getUserById, userLogin, userRegister } from "../controllers/userController";

const router: Router = Router();

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.post("/register", userRegister);

router.post("/login", userLogin);

export default router;