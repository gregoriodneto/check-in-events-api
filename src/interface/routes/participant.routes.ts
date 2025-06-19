import express from "express";
import { PrismaParticipantRepository } from "../../infrastructure/repositories/PrismaParticipantRepository.ts";
import { CreateParticipantUseCase } from "../../application/use-cases/CreateParticipantUseCase.ts";
import { FindByIdParticipantUseCase } from "../../application/use-cases/FindByIdParticipantUseCase.ts";
import { ParticipantController } from "../controllers/ParticipantController.ts";

const router = express.Router();

const participantEvent = new PrismaParticipantRepository();
const createParticipantUseCase = new CreateParticipantUseCase(participantEvent);
const findByIdParticipantUseCase = new FindByIdParticipantUseCase(participantEvent);
const participantController = new ParticipantController(
    createParticipantUseCase,
    findByIdParticipantUseCase
);

router.post('/participants', participantController.save);
router.get('/participants/:id', participantController.findById);

export default router;