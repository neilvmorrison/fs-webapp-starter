import { Pool } from "pg";

export default abstract class BaseService {
  client: Pool;

  constructor(client: Pool) {
    this.client = client;
  }

  protected async query() {
    return;
  }
}
