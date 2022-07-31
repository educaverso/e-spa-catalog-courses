import { Entity } from "@/domain/Entity";
import type RoomId from "./RoomId";

type Attributes = {
    roomId: RoomId;
    name: string;
    description: string;
}

export default class Room extends Entity<RoomId>{

    private description: string;

    private constructor(readonly id: RoomId, readonly name: string, description: string) {
        super(id);
        this.description = description;
    }

    static of(attr: Attributes): Room {
        return new Room(attr.roomId, attr.name, attr.description);
    }

    update(description: string): Room {

        this.description = description;

        return this;

    }

}

