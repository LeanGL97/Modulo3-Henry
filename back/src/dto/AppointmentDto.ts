interface IAppointmentDTO {
    date: Date,
    time: string,
    userId: number,
    status: "active" | "cancelled"
};

export default IAppointmentDTO;