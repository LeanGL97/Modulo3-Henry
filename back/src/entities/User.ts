import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Credential } from "./Credential"
import { Appointment } from "./Appointment"

@Entity ({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column ({
        length: 30
    })
    name: string

    @Column({
        unique: true
    })
    email: string

    @Column({
        type: "date"
    })
    birthdate: Date

    @Column({
        length: 10
    })
    nDni: string

    @Column()
    credentialsId: number

    @OneToOne(() => Credential)
    @JoinColumn({name: "credentialsId"})
    credential: Credential;

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[]
}