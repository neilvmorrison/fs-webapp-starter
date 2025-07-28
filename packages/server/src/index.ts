import dotenv from "dotenv";
import Koa from "koa";
import logger from "koa-logger";
import bodyParser from "@koa/bodyparser";
import router from "./router";
import staticFiles from "koa-static";
import path from "path";
import authMiddleware from "./middleware/auth.middleware";
import { errorHandler } from "./middleware/error.middleware";

dotenv.config();

const app = new Koa();

app.use(logger());

app.use(bodyParser());

app.use(errorHandler);

app.use(authMiddleware);

app.use(router.routes()).use(router.allowedMethods());

app.use(staticFiles(path.join(__dirname, "../../web/dist")));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
