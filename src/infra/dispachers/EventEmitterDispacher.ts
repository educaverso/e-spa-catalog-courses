import type { Class } from "@/domain/_commons/Class";
import type { Event, EventClass } from "@/domain/domain-events/Event";
import type { EventDispacher } from "@/domain/domain-events/EventDispacher";
import type { EventHandler } from "@/domain/domain-events/EventHandler";
import EventEmitter from "events";
import { onBeforeUnmount } from "vue";
import { SingletonFactory } from "../../domain/_commons/SingletonFactory";

class MyEmitter extends EventEmitter { }

const emitter = SingletonFactory(() => new MyEmitter())();

class EventEmitterDispacher implements EventDispacher {

    subscribe<E extends Event>(eventClass: Class<E>, handler: EventHandler<E>): void {

        const topic = (eventClass as EventClass<any>).topic;

        if (!topic) {
            throw new TypeError(`Event class ${eventClass.name} must have a topic property`);
        }

        emitter.on(topic, handler);

        onBeforeUnmount(() => {
            emitter.off(topic, handler)
        })

    }

    notify(event: Event): void {
        emitter.emit((event.constructor as EventClass<any>).topic, event)
    }

}

export const eventDispatcher = SingletonFactory(() => new EventEmitterDispacher())()