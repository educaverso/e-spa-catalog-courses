import type { Event } from "./Event";

export interface EventHandler<T extends Event> {

    (event: T): void;

}
