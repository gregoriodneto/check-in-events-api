import { Participant } from "../../domain/entities/Participant.ts";

export interface IParticipantRepository {
    save(participant: Participant): Promise<Participant>;
    findById(id: number): Promise<Participant | null>;
}