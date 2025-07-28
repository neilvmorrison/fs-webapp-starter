import { Pool } from "pg";

export default abstract class BaseService {
  client: Pool;

  constructor(client: Pool) {
    this.client = client;
  }

  protected async query() {
    return;
  }

  async findMany() {
    return;
  }

  async findOne() {
    return;
  }

  async findOneOrFail() {
    return;
  }

  async create() {
    return;
  }

  async update() {
    return;
  }

  async delete() {
    return;
  }
}
