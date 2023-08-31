import IRoute from "../shared/IRoute";
import { Router } from "express";
import UserController from "./controller/user.controller";


// contains all the routes for the user module

export default class UserRoute implements IRoute {
    public router: Router = Router();
    private userController: UserController;
    public path: string = "/users";

    constructor() {
        this.userController = new UserController();
        this.initRoutes();
    }

    private initRoutes = () => {
        this.router.get(`${this.path}/login`, this.userController.login);
        this.router.post(`${this.path}/logout`, this.userController.logout);
        this.router.post(`${this.path}/register`, this.userController.register);
    }

} 