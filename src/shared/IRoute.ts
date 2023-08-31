import { Router } from "express";

export default interface IRoute {
    router: Router;
    path: string;
}