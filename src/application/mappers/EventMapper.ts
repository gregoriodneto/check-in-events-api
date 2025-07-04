import { Event } from "../../domain/entities/Event.ts";
import { EventDTO } from "../dtos/EventDTO.ts";

export class EventMapper {
    static toDTO(event: Event) {
        const dto = { 
            title: event.title, 
            description: event.description, 
            capacity: event.capacity,
            dateTimeEvent: new Date(event.dateTimeEvent)
        };

        if (event.id !== undefined) {
            return { ...dto, id: event.id };
        }

        return dto;
    }

    static toEntity(dto: EventDTO & { id?: number }) {
        return new Event(
            dto.title,
            dto.description,
            dto.capacity,
            new Date(dto.dateTimeEvent),
            dto.id
        );
    }
}