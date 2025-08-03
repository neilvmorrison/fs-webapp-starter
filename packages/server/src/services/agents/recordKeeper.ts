import { Pool } from "pg";

export default class AgentRecordKeeper {
  client: Pool;
  transactionsService: any;
  notesService: any;
  projectsService: any;
  scheduleService: any;

  constructor(
    client: Pool,
    transactionsService: any,
    notesService: any,
    projectsService: any,
    scheduleService: any
  ) {
    this.client = client;
    this.transactionsService = transactionsService;
    this.notesService = notesService;
    this.projectsService = projectsService;
    this.scheduleService = scheduleService;
  }
}
