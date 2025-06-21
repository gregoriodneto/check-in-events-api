import express from "express";
import { PrismaEventRepository } from "../../infrastructure/repositories/PrismaEventRepository.ts";
import { CreateEventUseCase } from "../../application/use-cases/Events/CreateEventUseCase.ts";
import { EventController } from "../controllers/EventController.ts";
import { FindAllEventsUseCase } from "../../application/use-cases/Events/FindAllEventsUseCase.ts";
import { ReportEventUseCase } from "../../application/use-cases/CheckIns/ReportEventUseCase.ts";

const router = express.Router();

const eventRepository = new PrismaEventRepository();
const createEventUseCase = new CreateEventUseCase(eventRepository);
const findAllEventsUseCase = new FindAllEventsUseCase(eventRepository);
const reportEventUseCase = new ReportEventUseCase(eventRepository);
const eventController = new EventController(
    createEventUseCase,
    findAllEventsUseCase,
    reportEventUseCase
);

router.post('/events', eventController.create);
router.get('/events', eventController.findAll);
router.get('/events/:id/report', eventController.report);

export default router;