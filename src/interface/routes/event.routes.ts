import express from "express";
import { PrismaEventRepository } from "../../infrastructure/repositories/PrismaEventRepository.ts";
import { CreateEventUseCase } from "../../application/use-cases/CreateEventUseCase.ts";
import { EventController } from "../controllers/EventController.ts";

const router = express.Router();

const eventRepository = new PrismaEventRepository();
const createEventUseCase = new CreateEventUseCase(eventRepository);
const eventController = new EventController(createEventUseCase);

router.post('/events', eventController.create);

export default router;