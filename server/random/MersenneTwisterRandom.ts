import { AbstractRandom } from "./AbstractRandom";
import MersenneTwister from 'mtwist';

export class MersenneTwisterRandom extends AbstractRandom {
    private static instance: MersenneTwisterRandom;

    private m: MersenneTwister;

    private constructor() {
        super();
        this.m = new MersenneTwister();
    }

    public static getInstance(): MersenneTwisterRandom {
        if (!MersenneTwisterRandom.instance) {
            MersenneTwisterRandom.instance = new MersenneTwisterRandom();
        }
        return MersenneTwisterRandom.instance;
    }

    public generateInt(min: number, max: number): number {
        return Math.floor(this.m.random() * (max - min + 1) + min);
    }
}