import dotenv from "dotenv";
import Koa from "koa";

dotenv.config();

const app = new Koa();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
