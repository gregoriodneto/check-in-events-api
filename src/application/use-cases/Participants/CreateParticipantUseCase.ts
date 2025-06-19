import { Participant } from "../../../domain/entities/Participant.ts";
import { ParticipantDTO } from "../../dtos/ParticipantDTO.ts";
import { ParticipantMapper } from "../../mappers/ParticipantMapper.ts";
import { IParticipantRepository } from "../../ports/IParticipantRepository.ts";



export class CreateParticipantUseCase {
    constructor(private participantRepository: IParticipantRepository) { }

    async save(dto: ParticipantDTO): Promise<Participant> {
        const data = ParticipantMapper.toEntity(dto);
        return await this.participantRepository.save(data);
    }
}