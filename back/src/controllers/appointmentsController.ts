import { Request, Response } from "express";
import { cancelAppointmentService, createAppointmentService, getAllAppointmentsService, getAppointmentByIdService } from "../services/appointmentService";
import IAppointmentDTO from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment[] = await getAllAppointmentsService();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: "An error ocurred" });
    }
};

export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const appointment: Appointment = await getAppointmentByIdService(Number(id));

        if (appointment) {
            res.status(200).json(appointment);
        } else {
            res.status(404).json({ message: "Appointment not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "An error ocurred" });
    }
};

export const newAppointment = async (req: Request, res: Response) => {
    try {
        const { date, time, userId, status }: IAppointmentDTO = req.body;

        if (!date || !time || !userId || !status) {
            res.status(400).json({ message: "All fields are required." });
            return;
        }

        const newTurn: Appointment = await createAppointmentService({ date, time, status, userId });
        res.status(201).json(newTurn);
    } catch (error) {
        res.status(500).json({ message: "An error ocurred" });
    }
};

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const appointment: Appointment = await cancelAppointmentService(Number(id));

        if (appointment) {
            res.status(200).json(appointment);
        } else {
            res.status(404).json({ message: "Appointment not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "An error ocurred" });
    }
};
