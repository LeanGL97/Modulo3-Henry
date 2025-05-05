import { Router } from "express";
import { cancelAppointment, getAllAppointments, getAppointmentById, newAppointment } from "../controllers/appointmentsController";


const router = Router();

router.get("/", getAllAppointments);

router.get("/:id", getAppointmentById);

router.post("/schedule", newAppointment);

router.delete("/:id", cancelAppointment);

export default router;