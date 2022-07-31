import type Room from "./Room";
import type RoomId from "./RoomId";

export default interface RoomGateway {

    create(room: Room): Promise<Room>;

    update(room: Room): Promise<Room>;

    deleteById(roomId: RoomId): Promise<void>;

    findById(roomId: RoomId): Promise<Room | undefined>;

    findByName(name: string): Promise<Room | undefined>;

}