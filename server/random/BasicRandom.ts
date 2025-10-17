import {AbstractRandom} from "./AbstractRandom";

export class BasicRandom extends AbstractRandom {
    private static instance: BasicRandom;

    private constructor() {
        super();
    }

    public static getInstance(): BasicRandom {
        if (!BasicRandom.instance) {
            BasicRandom.instance = new BasicRandom();
        }
        return BasicRandom.instance;
    }

    public generateInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}