export class Event {
    constructor(
        readonly title: string, 
        readonly description: string, 
        readonly capacity: number,
        readonly dateTimeEvent: Date,
        readonly id?: number
    ) {
        if (title.length < 5) throw new Error('Tamanho mínimo 5 caracteres do título.');
        if (description.length < 5) throw new Error('Tamanho mínimo 10 caracteres da descrição.');
        if (capacity < 1) throw new Error('Capacidade deve ter pelo menos 1');
        if (!dateTimeEvent || dateTimeEvent.getTime() < Date.now() + 24 * 60 * 60 * 1000) 
            throw new Error('Data do Evento tem que ser pelo menos com 1 dia de antecedência.');
    }
}