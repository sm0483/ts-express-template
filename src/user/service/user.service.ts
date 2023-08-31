// contains all the business logic for the user module

export default class UserService {
    constructor() { }

    public login = async () => {

        return { message: "login success" }

    };

    public logout = async () => {
        // logout logic

        return { message: "logout success" };
    }
    public register = async () => {
        // register logic

        return { message: "register success" };
    }

}