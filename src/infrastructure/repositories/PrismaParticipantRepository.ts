import { ParticipantMapper } from "../../application/mappers/ParticipantMapper.ts";
import { IParticipantRepository } from "../../application/ports/IParticipantRepository.ts";
import { Participant } from "../../domain/entities/Participant.ts";
import prisma from "../database/clientPrisma.ts";

export class PrismaParticipantRepository implements IParticipantRepository {
    async save(participant: Participant): Promise<Participant> {
        const data = ParticipantMapper.toDTO(participant);
        const saved = await prisma.participant.create({ data });
        return ParticipantMapper.toEntity(saved);
    }

    async findById(id: number): Promise<Participant | null> {
        return await prisma.participant.findUnique({ where: { id } });
    }
}