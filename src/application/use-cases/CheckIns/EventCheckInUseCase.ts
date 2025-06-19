import { ICheckInRepository } from "../../ports/ICheckInRepository.ts";
import { CheckInDTO } from "../../dtos/CheckInDTO.ts";
import { CheckInMapper } from "../../mappers/CheckInMapper.ts";
import { CheckIn } from "../../../domain/entities/CheckIn.ts";

export class EventCheckInUseCase {
    constructor(private checkInRepository: ICheckInRepository) {}

    async checkIn(dto: CheckInDTO): Promise<CheckIn> {
        const checkIn = CheckInMapper.toEntity(dto);
        return await this.checkInRepository.checkIn(checkIn);
    }
}