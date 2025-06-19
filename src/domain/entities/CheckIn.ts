export class CheckIn {
    constructor(
        readonly participantId: number,
        readonly eventId: number,
        readonly checkedInAt?: Date,
        readonly id?: number
    ) {
        if (!participantId) throw new Error("Id do Participante não informado.");
        if (!eventId) throw new Error("Id do Evento não informado.");
    }
}