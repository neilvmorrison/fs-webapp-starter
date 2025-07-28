import { Context } from "koa";

export default async function authMiddleware(
  ctx: Context,
  next: () => Promise<void>
) {
  try {
    await next();
  } catch (error) {
    ctx.status = 401;
    ctx.body = { message: "Unauthorized" };
  }
}
