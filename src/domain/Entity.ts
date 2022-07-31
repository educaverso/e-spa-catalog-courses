import type { Identifier } from "./Identifier";

export abstract class Entity<T extends Identifier = Identifier> {

    protected constructor(readonly id: T) {
    }

    equals(o: Entity<T>): boolean {

        if (o.id == null) return false;

        return this == o || o.id.equals(this.id);

    }

}
