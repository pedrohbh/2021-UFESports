import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { Event } from "./Event";
import { Student } from './Student';

@Entity("event_has_students")
export class EventHasStudents {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int4', { name: 'event_id' })
    eventId: number;

    @ManyToOne(type => Event, { eager: true, cascade: true })
    @JoinColumn({ name: 'event_id' })
    event: Event;

    @Column('int4', { name: 'student_id' })
    studentId: number;

    @ManyToOne(type => Student, { eager: true, cascade: true })
    @JoinColumn({ name: "student_id" })
    student: Student;
}