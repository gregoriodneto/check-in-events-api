import express from "express";
import eventRoutes from "./interface/routes/event.routes.ts";
import participantRoutes from "./interface/routes/participant.routes.ts";
import checkInRoutes from "./interface/routes/checkIn.routes.ts";
import { ENV } from "./config/env.ts";

const app = express();
app.use(express.json());

app.use('/api', eventRoutes);
app.use('/api', participantRoutes);
app.use('/api', checkInRoutes);

app.listen(ENV.PORT, () => {
    console.log(`API rodando em http://localhost:${ENV.PORT}`);
})