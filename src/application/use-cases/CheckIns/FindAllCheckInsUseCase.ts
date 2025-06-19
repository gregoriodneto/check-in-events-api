import { CheckIn } from "../../../domain/entities/CheckIn.ts";
import { ICheckInRepository } from "../../ports/ICheckInRepository.ts";

export class FindAllCheckInsUseCase {
    constructor(private checkInRepository: ICheckInRepository) { }

    async findAllCheckIns(): Promise<CheckIn[]> {
        return await this.checkInRepository.findAllCheckIns();
    }
}