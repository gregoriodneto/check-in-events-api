import { Event } from "../../../domain/entities/Event.ts";
import { IEventRepository } from "../../ports/IEventRepository.ts";

export class FindAllEventsUseCase {
    constructor(private eventRepository: IEventRepository) {}

    async findAll(): Promise<Event[]> {
        return await this.eventRepository.findAll();
    }
}