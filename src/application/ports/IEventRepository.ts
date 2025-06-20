import { Event } from "../../domain/entities/Event.ts";
import { Report } from "../../domain/entities/Report.ts";

export interface IEventRepository {
    save(event: Event): Promise<Event>;
    findAll(): Promise<Event[]>;
    report(id: number): Promise<Report[]>;
}