import express from "express";
import IRoute from "./shared/IRoute";

class App {
    public app: express.Application;
    public start: string;
    public port: number;


    constructor(routes: IRoute[]) {
        this.start = "/api/v1";
        this.app = express();
        this.initMiddleware();
        this.initRoutes(routes);
        this.port = 5000;
    }

    private initMiddleware = () => {
        this.app.use(express.json());
    };

    private initRoutes = (routes: IRoute[]) => {
        routes.forEach((route) => {
            this.app.use(this.start, route.router);
        });
    };

    public listen = () => {
        this.app.listen(this.port, () => {
            console.log(`connected to port ${this.port}`);
        });
    };

    public getApp = () => {
        return this.app;
    };
}

export default App;