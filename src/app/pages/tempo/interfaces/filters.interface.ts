/* Response */

export interface EventResponseInterface {
    eventId: string;
    eventName: string;
}


/* Body */

export interface SessionsCategoriesBodyInterface {
    year: number;
    eventId: string;
}

export interface ParticipantsBodyInterface {
    year: number;
    eventId: string;
    category: string;
}

export interface TempoBodyInterface {
    eventId: string;
    session: string
    participant: string;
}