import App from "./app";
import UserRoute from "./user/user.route";

const app = new App([new UserRoute()]);

app.listen();

export default app.getApp();