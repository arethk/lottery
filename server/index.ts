import express, { type Express, type Request, type Response } from 'express';
import { BasicRandom } from './random/BasicRandom';
import { MersenneTwisterRandom } from './random/MersenneTwisterRandom';

class LotteryResponseDTO {
    timestamp: number;
    results: Array<number>;
    algorithm: string;
    constructor(timestamp: number, results: Array<number>, algorithm: string) {
        this.timestamp = timestamp;
        this.results = results;
        this.algorithm = algorithm;
    }
}

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server is running');
});

app.get('/lottery', (req: Request, res: Response) => {
    const entries = 6;
    const min = 1;
    const max = 69;
    let algorithm: string = "";
    let winners: Array<number> = [];
    // choose a random random number generator
    if (Date.now() % 2 === 0) {
        algorithm = "basic";
        winners = BasicRandom.getInstance().generateList(entries, min, max);
    } else {
        algorithm = "mt";
        winners = MersenneTwisterRandom.getInstance().generateList(entries, min, max);
    }
    const responseDTO: LotteryResponseDTO = new LotteryResponseDTO(Date.now(), winners, algorithm);
    res.contentType("application/json");
    res.send(responseDTO);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
