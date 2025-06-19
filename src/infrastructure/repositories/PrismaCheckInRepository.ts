import prisma from "../database/clientPrisma.ts";
import { CheckInMapper } from "../../application/mappers/CheckInMapper.ts";
import { ICheckInRepository } from "../../application/ports/ICheckInRepository.ts";
import { CheckIn } from "../../domain/entities/CheckIn.ts";
import { Participant } from "../../domain/entities/Participant.ts";

export class PrismaCheckInRepository implements ICheckInRepository {    
    async checkIn(checkIn: CheckIn): Promise<CheckIn> {
        const data = CheckInMapper.toDTO(checkIn);
        const checkInEvent = await prisma.checkIn.create({ data });
        return CheckInMapper.toEntity(checkInEvent);
    }

    async findAllCheckIns(): Promise<CheckIn[]> {
        const checkIns = await prisma.checkIn.findMany();
        return checkIns.map(CheckInMapper.toEntity);
    }

    async participantsCheckInEvent(eventId: number): Promise<Participant[]> {
        const checkIns = await prisma.checkIn.findMany({
            where: { eventId },
            include: {
                participant: true
            }
        });

        const uniqueParticipantsMap = new Map<number, Participant>();
        for (const checkIn of checkIns) {
            uniqueParticipantsMap.set(checkIn.participant.id, checkIn.participant);
        }

        return Array.from(uniqueParticipantsMap.values());
    }    
}