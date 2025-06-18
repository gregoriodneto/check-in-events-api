import { EventMapper } from "../../application/mappers/EventMapper.ts";
import { IEventRepository } from "../../application/ports/IEventRepository.ts";
import { Event } from "../../domain/entities/Event.ts";
import prisma from "../database/clientPrisma.ts";

export class PrismaEventRepository implements IEventRepository {
    async save(event: Event): Promise<Event> {
        const data = EventMapper.toDTO(event);
        const saved = await prisma.event.create({ data });
        return EventMapper.toEntity(saved);
    }

    async findAll(): Promise<Event[]> {
        const events = await prisma.event.findMany();
        return events.map(EventMapper.toEntity);
    }
}