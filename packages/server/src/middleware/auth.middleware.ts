import { Context } from "koa";

export default async function authMiddleware(
  ctx: Context,
  next: () => Promise<void>
) {
  try {
    await next();
    // ctx.status = 302;
    // ctx.body = { message: "Authorized" };
    // ctx.redirect("/auth");
    return;
  } catch (error) {
    ctx.status = 401;
    ctx.body = { message: "Unauthorized" };
  }
}
