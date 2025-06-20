export class Participant {
    constructor(
        readonly name: string,
        readonly email: string,
        readonly eventId: number,
        readonly id?: number
    ) {
        if (name.trim().length <= 0) throw new Error('Nome deve ter pelo menos 1 caracter.');
        if (!email.trim().includes('@')) throw new Error('E-mail deve ter caracteres válidos.');
        if (!eventId) throw new Error('Necessário informar um evento para registrar o Participante.');
    }
}