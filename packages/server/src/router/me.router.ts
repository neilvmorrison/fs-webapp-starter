import Router from "@koa/router";
import BaseService from "../services/baseService";
import { Pool } from "pg";
import client from "../db/client";

class MeService extends BaseService {
  constructor(client: Pool, table: string) {
    super(client, table);
  }
}

const meService = new MeService(client, "user_profiles");
const meRouter = new Router({ prefix: "/@me" });

meRouter.get("/", async (ctx) => {
  try {
    const users = await meService.findMany();
    ctx.body = { data: users.rows[0] };
  } catch (error) {
    console.log(error);
    ctx.body = { error };
  }
});

export default meRouter;
