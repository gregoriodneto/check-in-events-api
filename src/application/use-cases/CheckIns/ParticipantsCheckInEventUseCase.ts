import { Participant } from "../../../domain/entities/Participant.ts";
import { ICheckInRepository } from "../../ports/ICheckInRepository.ts";

export class ParticipantsCheckInEventUseCase {
    constructor(private checkInRepository: ICheckInRepository) {}

    async participantsCheckInEvent(eventId: number): Promise<Participant[]> {
        return await this.checkInRepository.participantsCheckInEvent(eventId);
    }
}