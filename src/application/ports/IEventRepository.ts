import { Event } from "../../domain/entities/Event.ts";

export interface IEventRepository {
    save(event: Event): Promise<Event>;
    findAll(): Promise<Event[]>;
}