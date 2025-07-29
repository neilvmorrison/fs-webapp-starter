import { Ollama } from "ollama";

export default class OllamaService {
  ollama: Ollama;
  model: string;

  constructor(ollama: Ollama) {
    this.ollama = ollama;
    this.model = "mixtral";
  }

  async generate(prompt: string) {
    const response = await this.ollama.generate({ model: this.model, prompt });
    return response;
  }
}
