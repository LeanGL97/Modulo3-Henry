import { AppointmentModel, UserModel } from "../config/data-source";
import IAppointmentDTO from "../dto/AppointmentDto";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";

export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
    const appointments: Appointment[] = await AppointmentModel.find()
    return appointments;
}

export const getAppointmentByIdService = async (id: number): Promise<Appointment|null> => {
    const turn: Appointment|null = await AppointmentModel.findOne({
        where: {id}, relations: ["user"]
    });
    if(!turn) throw Error('Appointment not found');
    return turn;
};

export const createAppointmentService = async (appointmentData: IAppointmentDTO): Promise<Appointment> => {
    const newAppointment: Appointment = await AppointmentModel.create(appointmentData)

    const user: User = await UserModel.findOneBy({id: appointmentData.userId})

    newAppointment.user = user;
    await AppointmentModel.save(newAppointment)
    return newAppointment;
};

export const cancelAppointmentService = async (id: number): Promise<Appointment> => {

    const appointment = await AppointmentModel.findOneBy({id: id});

    if(!appointment) {
        throw new Error ('appointment with ID not found');
    }

    appointment.status = "cancelled";

    await AppointmentModel.save(appointment);

    return appointment;
}

