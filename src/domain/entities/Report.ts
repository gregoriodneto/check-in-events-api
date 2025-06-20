export class Report {
    constructor(
        readonly nameEvent: string,
        readonly dateTimeEvent: Date,
        readonly totalRegisteredParticipants: number,
        readonly numberOfParticipantsCheckedIn: number,
        readonly attendancePercentage: number
    ) { 
        if (nameEvent.trim().length < 3) throw new Error('Nome do Evento tem que ter pelo menos 3 Caracteres');
        if (totalRegisteredParticipants <= 0) throw new Error('Tem que ter pelo menos 1 participante registrado');
    }
}