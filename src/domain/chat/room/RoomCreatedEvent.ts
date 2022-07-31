import { Event } from "@/domain/domain-events/Event";
import type Room from "./Room";

@Event("room.created")
export default class RoomCreatedEvent implements Event<Room> {

    constructor(private readonly room: Room) {
        this.room = room;
    }

    payload(): Room {
        return this.room;
    }

    timestamp(): number {
        return Date.now();
    }

}