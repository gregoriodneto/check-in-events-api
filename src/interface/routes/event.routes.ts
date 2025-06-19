import express from "express";
import { PrismaEventRepository } from "../../infrastructure/repositories/PrismaEventRepository.ts";
import { CreateEventUseCase } from "../../application/use-cases/Events/CreateEventUseCase.ts";
import { EventController } from "../controllers/EventController.ts";
import { FindAllEventsUseCase } from "../../application/use-cases/Events/FindAllEventsUseCase.ts";

const router = express.Router();

const eventRepository = new PrismaEventRepository();
const createEventUseCase = new CreateEventUseCase(eventRepository);
const findAllEventsUseCase = new FindAllEventsUseCase(eventRepository);
const eventController = new EventController(
    createEventUseCase,
    findAllEventsUseCase
);

router.post('/events', eventController.create);
router.get('/events', eventController.findAll);

export default router;