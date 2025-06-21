import { EventMapper } from "../../application/mappers/EventMapper.ts";
import { IEventRepository } from "../../application/ports/IEventRepository.ts";
import { Event } from "../../domain/entities/Event.ts";
import { Report } from "../../domain/entities/Report.ts";
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

    async report(id: number): Promise<Report | null> {
        const events = await prisma.event.findUnique({
            where: { id },
            include: {
                participants: true,
                checkIns: true
            }
        });

        if (!events) return null;

        const numberOfParticipantsCheckedIn = events.checkIns.length;
        const totalRegisteredParticipants = events.participants.length;
        const attendancePercentage = (numberOfParticipantsCheckedIn / totalRegisteredParticipants * 100);

        return new Report(
            events.title,
            events.dateTimeEvent,
            totalRegisteredParticipants,
            numberOfParticipantsCheckedIn,
            attendancePercentage
        );
    }
}