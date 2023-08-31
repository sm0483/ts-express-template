

import UserService from "../service/user.service";
import { Request, Response } from "express";

export default class UserController {
    private userService: UserService;
    constructor() {
        this.userService = new UserService();
    }

    public login = async (req: Request, res: Response) => {
        try {
            res.status(200).json(await this.userService.login());
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    public logout = async (req: Request, res: Response) => {
        try {
            res.status(200).json(await this.userService.logout());
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    public register = async (req: Request, res: Response) => {
        try {
            res.status(200).json(await this.userService.register());
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

}