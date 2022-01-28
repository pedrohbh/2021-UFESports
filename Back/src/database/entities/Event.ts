import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { EventHasStudents } from "./EventHasStudents";
import { Sport } from "./Sport";

@Entity("event")
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    title: string;

    @Column('timestamptz', { name: 'date_of_the_event' })
    dateOfTheEvent: Date;

    @Column('varchar')
    location: string;

    @Column('int', { name: 'minimum_number_of_participants' })
    minimumNumberOfParticipants: number;

    @Column('int', { name: 'maximum_number_of_participants' })
    maximumNumberOfParticipants: number;

    @Column('int', { name: 'currently_enrolled' })
    currentlyEnrolled: number;

    @Column('int4', { name: 'sport_id' })
    sportId: number;

    @ManyToOne(type => Sport, sport => sport.events, { eager: true })
    @JoinColumn({ name: "sport_id" })
    sport: Sport;

    @OneToMany(type => EventHasStudents, eventHasStudents => eventHasStudents.event)
    eventHasStudents: EventHasStudents[];
}