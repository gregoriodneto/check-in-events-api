import express from "express";
import { PrismaCheckInRepository } from "../../infrastructure/repositories/PrismaCheckInRepository.ts";
import { EventCheckInUseCase } from "../../application/use-cases/CheckIns/EventCheckInUseCase.ts";
import { FindAllCheckInsUseCase } from "../../application/use-cases/CheckIns/FindAllCheckInsUseCase.ts";
import { ParticipantsCheckInEventUseCase } from "../../application/use-cases/CheckIns/ParticipantsCheckInEventUseCase.ts";
import { CheckInController } from "../controllers/CheckInController.ts";

const router = express.Router();

const checkInRepository = new PrismaCheckInRepository();
const eventCheckInUseCase = new EventCheckInUseCase(checkInRepository);
const findAllCheckInUseCase = new FindAllCheckInsUseCase(checkInRepository);
const participantsCheckInEventUseCase = new ParticipantsCheckInEventUseCase(checkInRepository);
const checkInController = new CheckInController(
    eventCheckInUseCase,
    findAllCheckInUseCase,
    participantsCheckInEventUseCase
);


router.post('/check-ins', checkInController.checkIn);
router.get('/check-ins', checkInController.findAllCheckIns);
router.get('/check-ins/:id', checkInController.participantsCheckInEvent);

export default router;