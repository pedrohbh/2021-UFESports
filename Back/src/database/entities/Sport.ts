import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Event } from "./Event";

@Entity("sport")
export class Sport {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @OneToMany(type => Event, event => Event)
    events: Event[];
}