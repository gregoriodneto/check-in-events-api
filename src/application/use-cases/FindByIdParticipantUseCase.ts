import { Participant } from "../../domain/entities/Participant.ts";
import { IParticipantRepository } from "../ports/IParticipantRepository.ts";

export class FindByIdParticipantUseCase {
    constructor(private participantRepository: IParticipantRepository) { }

    async findById(id: number): Promise<Participant | null> {
        return await this.participantRepository.findById(id);
    }
}