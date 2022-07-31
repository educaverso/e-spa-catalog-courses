
export type CreateRoomIn = {
    name: string;
    description: string;
}

export type CreateRoomOut = {
    roomId: string;
}

export default interface ICreateRoomStory {

    execute(anIn: CreateRoomIn): Promise<CreateRoomOut>;

}
