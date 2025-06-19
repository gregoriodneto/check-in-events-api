import { NextFunction, Request, RequestHandler, Response } from "express";
import { EventCheckInUseCase } from "../../application/use-cases/CheckIns/EventCheckInUseCase.ts";
import { FindAllCheckInsUseCase } from "../../application/use-cases/CheckIns/FindAllCheckInsUseCase.ts";
import { ParticipantsCheckInEventUseCase } from "../../application/use-cases/CheckIns/ParticipantsCheckInEventUseCase.ts";
import { HttpStatus } from "../../shared/enums/HttpStatus.ts";
import { CheckInDTO } from "../../application/dtos/CheckInDTO.ts";

export class CheckInController {
    constructor(
        private eventCheckInUseCase: EventCheckInUseCase,
        private findAllCheckInUseCase: FindAllCheckInsUseCase,
        private participantsCheckInEventUseCase: ParticipantsCheckInEventUseCase
    ) { }

    checkIn: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const dto: CheckInDTO = req.body;

            const checkIn = await this.eventCheckInUseCase.checkIn(dto);

            res.status(HttpStatus.CREATED).json({
                message: 'Check In no Evento realizado com sucesso',
                data: checkIn
            });
        } catch (error: any) {
            res.status(HttpStatus.BAD_REQUEST).json({
                message: error.message || 'Erro ao realizar check in'
            });
        }
    }

    findAllCheckIns: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const checkIns = await this.findAllCheckInUseCase.findAllCheckIns();

            res.status(HttpStatus.CREATED).json({
                message: 'Listagem de todos os checkIns',
                data: checkIns
            });
        } catch (error: any) {
            res.status(HttpStatus.BAD_REQUEST).json({
                message: error.message || 'Erro na listagem de check ins'
            });
        }
    }

    participantsCheckInEvent: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = Number(req.params.id);

            if (!id) res.status(HttpStatus.BAD_REQUEST).json({ message: 'Id do evento não foi informado.' });

            const participants = await this.participantsCheckInEventUseCase.participantsCheckInEvent(id);

            res.status(HttpStatus.CREATED).json({
                message: 'Participantes do Evento informado',
                data: participants
            });
        } catch (error: any) {
            res.status(HttpStatus.BAD_REQUEST).json({
                message: error.message || 'Erro ao realizar consulta dos participantes do evento'
            });
        }
    }
}