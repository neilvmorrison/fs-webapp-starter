import Router from "@koa/router";
import ollama from "ollama";
import OllamaService from "../ollama";

const basePrompt = `You are a helpful assistant that will analyze user requests and generate a raw JSON object as your response, nothing else. Your task is now to choose which of the following services to call with the JSON object you've created: create-transaction, create-note, create-project, update-schedule. Your response will be in the form { service: one of the above, data: <JSON object> }.`;

const ollamaService = new OllamaService(ollama);

const agentRouter = new Router({ prefix: "/agent" });

function performAction(action: string, data: any) {
  switch (action) {
    case "create-transaction":
      break;
    case "create-note":
      break;
    case "create-project":
      break;
    case "update-schedule":
      break;
    default:
      throw new Error("Invalid action");
  }
}

agentRouter.post("/generate", async (ctx) => {
  const { prompt } = ctx.request.body;
  const response = await ollamaService.generate(`${basePrompt}\n\n${prompt}`);
  ctx.body = { data: response, user_id: ctx.state.user };
});

export default agentRouter;
