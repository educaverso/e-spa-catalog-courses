import { Identifier } from "@/domain/Identifier";

export default class RoomId extends Identifier {

    private constructor(value: string = "") {
        super(value);
    }

    static of(value?: string): RoomId {
        return new RoomId(value);
    }

}