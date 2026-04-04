import Fastify from "fastify";

import dbPlugin from "./plugins/db.js";

export const buildApp = () => {
  const app = Fastify({
    logger: true,
  });
  app.register(dbPlugin);
  app.get("/health", async () => {
    return { status: "ok" };
  });

  return app;
};
