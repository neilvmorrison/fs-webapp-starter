import { Context } from "koa";

async function getUserFromToken(ctx: Context) {
  return "fb90a1a9-54d4-46ea-aef3-e36cc94fb627";
}

export default async function authMiddleware(
  ctx: Context,
  next: () => Promise<void>
) {
  try {
    ctx.state.user = await getUserFromToken(ctx);
    await next();
    return;
  } catch (error) {
    throw error;
  }
}
