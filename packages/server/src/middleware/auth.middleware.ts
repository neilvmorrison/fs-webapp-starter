import { Context } from "koa";

export default async function authMiddleware(
  ctx: Context,
  next: () => Promise<void>
) {
  try {
    ctx.state.user = "123";
    await next();
    return;
  } catch (error) {
    ctx.status = 401;
    ctx.body = { message: "Unauthorized" };
  }
}
