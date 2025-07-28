import Router from "@koa/router";

const authRouter = new Router({ prefix: "/auth" });

authRouter.post("/login", async (ctx) => {
  ctx.body = { message: "Login" };
});

authRouter.post("/register", (ctx) => {
  console.log(ctx.state.user);
  ctx.body = { message: "Register" };
});

authRouter.post("/logout", (ctx) => {
  ctx.body = { message: "Logout" };
});

export default authRouter;
