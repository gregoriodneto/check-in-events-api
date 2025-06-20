import { Participant } from "../../domain/entities/Participant.ts";
import { ParticipantDTO } from "../dtos/ParticipantDTO.ts";

export class ParticipantMapper {
    static toDTO(participant: Participant) {
        const dto = {
            name: participant.name,
            email: participant.email,
            eventId: participant.eventId
        }

        if (participant.id !== undefined) {
            return { ...dto, id: participant.id }
        }

        return dto;
    }

    static toEntity(dto: ParticipantDTO & { id?: number }) {
        return new Participant(
            dto.name,
            dto.email,
            dto.eventId,
            dto.id
        );
    }
}