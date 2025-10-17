import express, { type Express, type Request, type Response } from 'express';
import { BasicRandom } from './random/BasicRandom';

const app:Express = express();
const port = 3000;

app.get('/', (req:Request, res:Response) => {
    res.send('Express + TypeScript Server is running');
});

app.get('/lottery', (req:Request, res:Response) => {
    res.contentType("application/json");
    res.send(BasicRandom.getInstance().generateList(6, 1, 69));
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
