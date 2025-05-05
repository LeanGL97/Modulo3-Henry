import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity ({
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "date"
    })
    date: Date

    @Column({
        type: "time"
    })
    time: string

    @Column()
    userId: number

    @Column({
        default: "active"
    })
    status: "active" | "cancelled"

    @ManyToOne(() => User, (user) => user.appointments, { onDelete: 'CASCADE' })
    user: User
}