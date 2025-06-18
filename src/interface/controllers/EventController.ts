import { NextFunction, Request, RequestHandler, Response } from "express";
import { CreateEventUseCase } from "../../application/use-cases/CreateEventUseCase.ts";
import { EventDTO } from "../../application/dtos/EventDTO.ts";
import { HttpStatus } from "../../shared/enums/HttpStatus.ts";

export class EventController {
    constructor(private createEventUseCase: CreateEventUseCase) { }

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
}