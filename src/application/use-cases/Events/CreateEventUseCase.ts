import { Event } from "../../../domain/entities/Event.ts";
import { EventDTO } from "../../dtos/EventDTO.ts";
import { EventMapper } from "../../mappers/EventMapper.ts";
import { IEventRepository } from "../../ports/IEventRepository.ts";

export class CreateEventUseCase {
    constructor(private eventRepository: IEventRepository) { }

    async save(dto: EventDTO): Promise<Event> {
        const event = EventMapper.toEntity(dto);
        return await this.eventRepository.save(event);
    }
}