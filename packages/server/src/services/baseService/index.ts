import { Pool } from "pg";
import tryCatch from "../../utils/try-catch";
import { NotFoundError } from "../../errors";

export default abstract class BaseService {
  client: Pool;
  table: string;

  constructor(client: Pool, table: string) {
    this.client = client;
    this.table = table;
  }

  protected async query(query: string, values?: any[]) {
    const client = await this.client.connect();
    try {
      const { data, error } = await tryCatch(client.query(query, values));
      if (error) throw error;
      return data;
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  }

  async findMany() {
    return this.query(`SELECT * FROM ${this.table}`);
  }

  async findOne(id: string) {
    return this.query(`SELECT * FROM ${this.table} LIMIT 1 where id = $1`, [
      id,
    ]);
  }

  async findOneOrFail(id: string) {
    const result = await this.findOne(id);
    if (!result.rows[0]) {
      throw new NotFoundError(`Record not found for id: ${id}`);
    }
    return result.rows[0];
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
