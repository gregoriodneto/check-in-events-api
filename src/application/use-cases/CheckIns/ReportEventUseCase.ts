import { IEventRepository } from "../../ports/IEventRepository.ts";

export class ReportEventUseCase {
    constructor(private repo: IEventRepository) { }

    async execute(id: number) {
        const report = await this.repo.report(id);
        if (!report) throw new Error("Evento não encontrado.");
        return report;
    }
}