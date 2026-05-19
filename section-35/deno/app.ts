import { Application } from "https://deno.land/x/oak/mod.ts";

import todosRoutes from './routes/todos.ts';
import { connect } from './helpers/db_client.ts';

await connect();

const app = new Application();

app.use(async (ctx, next) => {
  console.log('Middleware!');
  await next();
});

app.use(async (ctx, next) => {
  ctx.response.headers.set('Access-Control-Allow-Origin', '*');
  ctx.response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  ctx.response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  if (ctx.request.method === 'OPTIONS') {
    ctx.response.status = 204;
    return;
  }
  await next();
});

app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 8000 });