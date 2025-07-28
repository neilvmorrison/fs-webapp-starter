import Router from "@koa/router";
import authRouter from "./auth.router";

const router = new Router({ prefix: "/api" });

router.get("/", (ctx) => {
  ctx.body = { message: "Ok" };
});

router.use(authRouter.routes()).use(authRouter.allowedMethods());

export default router;
