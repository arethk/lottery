
export abstract class AbstractRandom {

    abstract generateInt(min: number, max: number): number;

    public generateList(entries: number, min: number, max: number): Array<number> {
        const list: Array<number> = [];
        while (list.length < entries) {
            const value = this.generateInt(min, max);
            if (list.includes(value) === false) {
                list.push(value);
            }
        }
        return list.sort((a, b) => a - b);
    }
}