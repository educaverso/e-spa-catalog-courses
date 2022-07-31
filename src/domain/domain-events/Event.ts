import type { Entity } from "@/domain/Entity";
import type { Class } from "../_commons/Class";

export interface Event<T extends Entity = Entity> {

    payload(): T;

    timestamp(): number;

}

export type EventClass<T extends Event> = Class<T> & {
    topic: string;
};

export function Event(topic: string) {

    return (target: Class<Event>) => {
        Object.defineProperty(target, "topic", {
            value: topic,
            writable: false,
            configurable: false,
            enumerable: false
        });
    };

}