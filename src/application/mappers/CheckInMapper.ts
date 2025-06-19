import { CheckIn } from "../../domain/entities/CheckIn.ts";
import { CheckInDTO } from "../dtos/CheckInDTO.ts";

export class CheckInMapper {
    static toDTO(checkIn: CheckIn) {
        const dto = {
            participantId: checkIn.participantId,
            eventId: checkIn.eventId
        };

        if (checkIn.id !== undefined && checkIn.checkedInAt !== undefined) {
            return { ...dto, id: checkIn.id, checkedInAt: checkIn.checkedInAt };
        }

        return dto;
    }

    static toEntity(dto: CheckInDTO & { id?: number, checkedInAt?: Date }) {
        return new CheckIn(
            dto.eventId,
            dto.participantId,
            dto.checkedInAt,
            dto.id
        );
    }
}