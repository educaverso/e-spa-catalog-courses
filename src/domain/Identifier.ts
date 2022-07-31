import type { ValueObject } from "./ValueObject";

export abstract class Identifier implements ValueObject {

    constructor(readonly value: string) {

    }

    equals(o: Identifier): boolean {

        if (o == null) return false;

        return this == o || this.value === o.value;

    }

}