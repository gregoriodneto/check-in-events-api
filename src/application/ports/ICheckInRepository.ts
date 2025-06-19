import { CheckIn } from "../../domain/entities/CheckIn.ts";
import { Participant } from "../../domain/entities/Participant.ts";

export interface ICheckInRepository {
    checkIn(checkIn: CheckIn): Promise<CheckIn>;
    findAllCheckIns(): Promise<CheckIn[]>;
    participantsCheckInEvent(eventId: number): Promise<Participant[]>;
}