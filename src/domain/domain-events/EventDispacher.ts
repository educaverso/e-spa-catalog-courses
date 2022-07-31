import type { Event, EventClass } from "./Event";
import type { EventHandler } from "./EventHandler";

export interface EventDispacher {

    subscribe<E extends Event>(topic: EventClass<E>, handler: EventHandler<E>): void;

    notify(event: Event): void;

}