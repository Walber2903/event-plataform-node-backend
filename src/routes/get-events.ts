import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function getEvents(app: FastifyInstance){
  app
    .withTypeProvider<ZodTypeProvider>()
    .get('/events', {
      schema: {
        summary: 'Get all events',
        tags: ['events'],
        querystring: z.object({
          query: z.string().nullish(),
          pageIndex: z.string().nullable().default('0').transform(Number),
        }),
        response: {
          200: z.object({
            events: z.array(
              z.object({
                id: z.string().uuid(),
                title: z.string(),
                slug: z.string(),
                details: z.string().nullable(),
                maximumAttendees: z.number().int().nullable(),
                attendeesAmount: z.number().int(),
              })
            ),
            total: z.number(),
          })
        },
      }
    }, async (request, reply) => {
      const { pageIndex, query } = request.query

      const [events, total] = await Promise.all([
        prisma.event.findMany({
          select: {
            id: true,
            title: true,
            slug: true,
            details: true,
            maximumAttendees: true,
            _count: {
              select: {
                attendees: true
              }
            }
          },
          where: query ? {
            title: {
              contains: query,
            }
          } : {},
          take: 10,
          skip: pageIndex * 10,
          orderBy: {
            title: 'desc'
          }
        }),
        prisma.event.count({
          where: query ? {
            title: {
              contains: query,
            }
          } : {},
        })
      ])

      return reply.send({
        events: events.map(event => {
          return {
            id: event.id,
            title: event.title,
            slug: event.slug,
            details: event.details,
            maximumAttendees: event.maximumAttendees,
            attendeesAmount: event._count.attendees
          }
        }),
        total
      })
    })
}