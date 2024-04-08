import { prisma } from '../src/lib/prisma'
import events from './event-data.json'
import attendees from './attendee-data.json'
import checkIns from './check-in-data.json'

async function seedCreateEvent(eventData) {
  await prisma.event.create({
    data: eventData
  })
}

async function seedCreateAttendee(attendeeData) {
  console.log('Attendee data:', attendeeData)
  await prisma.attendee.create({
    data: {
      name: attendeeData.name,
      email: attendeeData.email,
      eventId: attendeeData.eventId,
    }
  })
}

async function seedCreateCheckIns(checkInData) {
  await prisma.checkIn.create({
    data: checkInData
  })
}

async function seedAll() {
  for (const event of events) {
    await seedCreateEvent(event)
  }

  
  for (const key in attendees) {
    const attendeeData = attendees[key]
    await seedCreateAttendee(attendeeData)
  }

  for (const key in checkIns) {
    const checkInData = checkIns[key]
    await seedCreateCheckIns(checkInData)
  }
}

seedAll().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
}).catch((error) => {
  console.error("Error when executing seed: ", error)
})