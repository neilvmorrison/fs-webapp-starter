import Router from "@koa/router";
import ollama from "ollama";
import OllamaService from "../ollama";

const ollamaService = new OllamaService(ollama);

const agentRouter = new Router({ prefix: "/agent" });

agentRouter.post("/generate", async (ctx) => {
  const { prompt } = ctx.request.body;
  const response = await ollamaService.generate(prompt);
  ctx.body = { data: response };
});

agentRouter.post("/register", (ctx) => {
  console.log(ctx.state.user);
  ctx.body = { message: "Register" };
});

agentRouter.post("/logout", (ctx) => {
  ctx.body = { message: "Logout" };
});

export default agentRouter;
