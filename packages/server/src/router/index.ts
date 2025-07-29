import Router from "@koa/router";
import authRouter from "./auth.router";
import meRouter from "./me.router";
import agentRouter from "./agent.router";

const router = new Router({ prefix: "/api" });

router.get("/", (ctx) => {
  ctx.body = { message: "Ok" };
});

router.use(authRouter.routes()).use(authRouter.allowedMethods());
router.use(meRouter.routes()).use(meRouter.allowedMethods());
router.use(agentRouter.routes()).use(agentRouter.allowedMethods());

export default router;
