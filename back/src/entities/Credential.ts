import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { User } from "./User";


@Entity({
    name: "credentials"
})
@Unique(["username"])
export class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string;


    @OneToOne(() => User, (user) => user.credential)
    @JoinColumn()
    user: User;
}