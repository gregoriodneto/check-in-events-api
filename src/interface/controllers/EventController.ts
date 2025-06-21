import { NextFunction, Request, RequestHandler, Response } from "express";
import { CreateEventUseCase } from "../../application/use-cases/Events/CreateEventUseCase.ts";
import { EventDTO } from "../../application/dtos/EventDTO.ts";
import { HttpStatus } from "../../shared/enums/HttpStatus.ts";
import { FindAllEventsUseCase } from "../../application/use-cases/Events/FindAllEventsUseCase.ts";
import { ReportEventUseCase } from "../../application/use-cases/CheckIns/ReportEventUseCase.ts";

export class EventController {
    constructor(
        private createEventUseCase: CreateEventUseCase,
        private findAllEventsUseCase: FindAllEventsUseCase,
        private reportEventUseCase: ReportEventUseCase
    ) { }

    create: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const dto: EventDTO = req.body;

            const event = await this.createEventUseCase.save(dto);

            res.status(HttpStatus.CREATED).json({
                message: 'Evento criado com sucesso!',
                data: event
            });
        } catch (error: any) {
            res.status(HttpStatus.BAD_REQUEST).json({
                message: error.message || 'Erro ao criar evento'
            });
        }
    }

    findAll: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const events = await this.findAllEventsUseCase.findAll();
            res.status(HttpStatus.OK).json({
                message: 'Listagem dos Eventos',
                data: events
            })
        } catch (error: any) {
            res.status(HttpStatus.BAD_REQUEST).json({
                message: error.message || 'Erro na listagem dos Eventos'
            });
        }
    }

    report: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = Number(req.params.id);
            if (!id) res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Id do Evento não informado'
            });

            const report = await this.reportEventUseCase.execute(id);
            res.status(HttpStatus.OK).json({
                message: 'Relatório do Evento',
                data: report
            })
        } catch (error: any) {
            res.status(HttpStatus.BAD_REQUEST).json({
                message: error.message || 'Erro no Relatório do Evento.'
            });
        }
    }
}