import { NextFunction, Request, RequestHandler, Response } from "express";
import { CreateParticipantUseCase } from "../../application/use-cases/Participants/CreateParticipantUseCase.ts";
import { FindByIdParticipantUseCase } from "../../application/use-cases/Participants/FindByIdParticipantUseCase.ts";
import { HttpStatus } from "../../shared/enums/HttpStatus.ts";
import { ParticipantDTO } from "../../application/dtos/ParticipantDTO.ts";

export class ParticipantController {
    constructor(
        private createParticipantUseCase: CreateParticipantUseCase,
        private findByIdParticipantUseCase: FindByIdParticipantUseCase
    ) { }

    save: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const dto: ParticipantDTO = req.body;

            const participant = await this.createParticipantUseCase.save(dto);

            res.status(HttpStatus.CREATED).json({
                message: 'Participante criado com sucesso!',
                data: participant
            })
        } catch (error: any) {
            res.status(HttpStatus.BAD_REQUEST).json({
                message: error.message || 'Erro ao salvar um Participante.'
            })
        }
    }

    findById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = Number(req.params.id);

            if (!id) res.status(HttpStatus.BAD_REQUEST).json({ message: 'Id do Participante não informado.' });

            const participant = await this.findByIdParticipantUseCase.findById(id);
            if (!participant) {
                res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Participante não encontrado.'
                });
            }

            res.status(HttpStatus.OK).json({
                message: 'Participante encontrado com sucesso.',
                data: participant
            });
        } catch (error: any) {
            res.status(HttpStatus.BAD_REQUEST).json({
                message: error.message || 'Erro ao buscar Participante'
            });
        }
    }
}