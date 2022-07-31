import Room from "@/domain/chat/room/Room";
import RoomCreatedEvent from "@/domain/chat/room/RoomCreatedEvent";
import type RoomGateway from "@/domain/chat/room/RoomGateway";
import RoomId from "@/domain/chat/room/RoomId";
import type { EventDispacher } from "@/domain/domain-events/EventDispacher";
import type ICreateRoomStory from "./ICreateRoomStory";
import type { CreateRoomIn, CreateRoomOut } from "./ICreateRoomStory";

export default class CreateRoomStory implements ICreateRoomStory {

    constructor(
        private readonly dispacher: EventDispacher,
        private readonly gateway: RoomGateway
    ) { }

    async execute(anIn: CreateRoomIn): Promise<CreateRoomOut> {

        const roomId = RoomId.of("random-uuid");

        const room = Room.of({
            roomId,
            name: anIn.name,
            description: anIn.description
        });

        this.dispacher.notify(new RoomCreatedEvent(room));

        return { roomId: roomId.value };

    }

}