# Event in

Event in is an application for managing participants in in-person events.

The tool allows the organizer to register an event and open a public registration page.

Registered participants can issue a credential for check-in on the day of the event.

The system will scan the participant's credentials to allow entry to the event.

## Requirements

### Functional requirements

- [x] The organizer must be able to register a new event;
- [x] The organizer must be able to view data from an event;
- [x] The organizer must be able to view the list of participants;
- [x] The participant must be able to register for an event;
- [x] The participant must be able to view their registration badge;
- [x] The participant must be able to check-in to the event;

### Business rules

- [x] Participants can only register for an event once;
- [x] Participants can only register for events with available places;
- [x] Participants can only check in to an event once;

### Non-functional requirements

- [ ] Check-in at the event will be carried out using a QRCode;

### Database

In this application we will use a relational database (SQL). For the development environment, we will continue with SQLite due to the ease of the environment.

### ERD Entity Relationship Diagram

![erd](https://github.com/Walber2903/event-plataform-node-backend/assets/23461921/ba5d19ca-bddc-45fc-a70e-312a7e699f5f)

