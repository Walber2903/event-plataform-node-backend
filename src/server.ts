import fastify from "fastify";
import fastifyCors from "@fastify/cors";

import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";

import { serializerCompiler, validatorCompiler , jsonSchemaTransform, ZodTypeProvider} from "fastify-type-provider-zod"
import { createEvent } from "./routes/create-event";
import { registerForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";
import { getAttendeeBadge } from "./routes/get-attendee-badge";
import { checkIn } from "./routes/check-in";
import { getEventAttendees } from "./routes/get-event-attendees";
import { errorHandler } from "./error-handler";
import { getEvents } from "./routes/get-events";

export const app = fastify().withTypeProvider<ZodTypeProvider>()

// In production you should specify frontend address
app.register(fastifyCors, {
  origin: '*',
})

app.register(fastifySwagger, {
  swagger: {
    consumes: ['application/json'],
    produces: ['application/json'],
    info: {
      title: 'event.in',
      description: 'Event in platform API backend specifications, built during the NLW Unite event.',
      version: '1.0.0'
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUI, {
  routePrefix: '/docs'
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getEvents)
app.register(getAttendeeBadge)
app.register(checkIn)
app.register(getEventAttendees)

app.setErrorHandler(errorHandler)

app.listen({ port: 3003, host: '0.0.0.0' }).then(() => {
  console.log('Server runing...')
})

app.addHook('onClose', (instance, done) => {
  instance.close().then(() => {
    console.log('Server closed successfully.')
    done()
  }).catch((err) => {
    console.error('Error closing server:', err)
    done(err)
  })
})