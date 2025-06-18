export class Event {
    constructor(
        readonly title: string, 
        readonly description: string, 
        readonly capacity: number,
        readonly id?: number
    ) {
        if (title.length < 5) throw new Error('Tamanho mínimo 5 caracteres do título.');
        if (description.length < 5) throw new Error('Tamanho mínimo 10 caracteres da descrição.');
        if (capacity < 1) throw new Error('Capacidade deve ter pelo menos 1');
    }
}