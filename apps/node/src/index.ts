import express from "express";
import type { Request, Response } from "express";
const app = express();

app.use(express.json());

app.get('/api',(_req: Request, res: Response) => {
    res.json({"message" : "Hello Mahfuz"});
})

app.listen(3000, () => console.log("running on http://localhost:3000"));
