import {
  registerForEvent
} from "./chunk-WOBQJJG3.mjs";
import {
  errorHandler
} from "./chunk-BSKU2KC6.mjs";
import {
  checkIn
} from "./chunk-FFLCZCSZ.mjs";
import {
  createEvent
} from "./chunk-PJWLT7NT.mjs";
import "./chunk-JKQ576JT.mjs";
import {
  getAttendeeBadge
} from "./chunk-T7AC5JI6.mjs";
import {
  getEventAttendees
} from "./chunk-YMY24YID.mjs";
import {
  getEvent
} from "./chunk-3BK2S2WR.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "event.in",
      description: "Event in platform API backend specifications, built during the NLW Unite event.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3003, host: "0.0.0.0" }).then(() => {
  console.log("Server runing...");
});
app.addHook("onClose", (instance, done) => {
  instance.close().then(() => {
    console.log("Server closed successfully.");
    done();
  }).catch((err) => {
    console.error("Error closing server:", err);
    done(err);
  });
});
export {
  app
};
