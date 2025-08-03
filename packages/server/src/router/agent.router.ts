import Router from "@koa/router";
import ollama, { GenerateResponse } from "ollama";
import OllamaService from "../ollama";
import fs from "fs";
import path from "path";

const basePromptFilePath = path.join(
  __dirname,
  "..",
  "prompts",
  "agentRouterPrompt.txt"
);
const basePrompt = fs.readFileSync(basePromptFilePath, "utf8");

const ollamaService = new OllamaService(ollama);

const agentRouter = new Router({ prefix: "/agent" });

async function createTransaction(data: any) {
  console.log("created transaction", data);
  return data;
}

async function createNote(data: any) {
  console.log("created note", data);
  return data;
}

async function createProject(data: any) {
  console.log("created project", data);
  return data;
}

async function updateSchedule(data: any) {
  console.log("updated schedule", data);
  return data;
}

async function createTask(data: any) {
  console.log("created task", data);
  return data;
}

function getHandler(action: string) {
  switch (action) {
    case "create-transaction":
      return createTransaction;
    case "create-note":
      return createNote;
    case "create-project":
      return createProject;
    case "update-schedule":
      return updateSchedule;
    case "create-task":
      return createTask;
    default:
      throw new Error("Invalid action");
  }
}

async function processResponse(response: GenerateResponse) {
  const data = JSON.parse(response.response);
  return data;
}

agentRouter.post("/generate", async (ctx) => {
  const { prompt } = ctx.request.body;
  const response = await ollamaService.generate(
    `${basePrompt}\n\nUser: ${prompt}`
  );

  const processedResponse = await processResponse(response);
  const handler = getHandler(processedResponse.service);
  const result = await handler(processedResponse.data);
  ctx.body = {
    data: result,
    user_id: ctx.state.user,
  };
});

export default agentRouter;
