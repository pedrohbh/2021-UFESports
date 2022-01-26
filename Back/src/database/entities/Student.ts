import { Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { EventHasStudents } from "./EventHasStudents";
import { User } from './User';

@Entity("student")
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    telephone: string;

    @Column('varchar')
    registration: string;

    @Column('int4', { name: 'user_id' })
    userId: number;

    @OneToOne(type => User, student => Student, { cascade: true, eager: true })
    @JoinColumn({ name: "user_id" })
    user: User;

    @OneToMany(type => EventHasStudents, eventHasStudents => eventHasStudents.student)
    eventHasStudents: EventHasStudents[];
}