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

#### How to test project

1- Donwload source code of the project with the green button.
![image](https://github.com/Walber2903/event-plataform-node-backend/assets/23461921/9da53efc-9f2f-43d9-99c4-0fd2e9218725)

2- Open the folder in your prefered code editor, in my case, VS CODE.
![image](https://github.com/Walber2903/event-plataform-node-backend/assets/23461921/d53f8fbe-8e62-4583-abe9-f3de0fb464c8)

3- With VS Code opened go to the terminal follow the path view -> terminal or press Ctrl+`.
![image](https://github.com/Walber2903/event-plataform-node-backend/assets/23461921/ca5862c8-ef6f-4f37-8084-ac1f6f938aed)

4- If you don't have NODE.JS installed on you pc, you need to install to your platform through the link:
https://nodejs.org/en/download

5- Now you have to run the migrates, to create database running the following command:
```npm run db:migrate``` 
![image](https://github.com/Walber2903/event-plataform-node-backend/assets/23461921/11129d20-0c42-4753-b96c-370ceb2ae965)

6- After created database you need to populate him, with the following command:
```npm run db:seed```
![image](https://github.com/Walber2903/event-plataform-node-backend/assets/23461921/d734f22e-811d-4d7f-a8ae-bdc18dc19233)

7- You can seed the database with prisma studio already incorporated to the project with the command:
```npm run db:studio```
![image](https://github.com/Walber2903/event-plataform-node-backend/assets/23461921/a0a96c37-f69f-46e7-bc9d-9dc7a784ad61)

8- In another terminal, you need to start the server with the command:
```npm run start```
![image](https://github.com/Walber2903/event-plataform-node-backend/assets/23461921/04213f22-41ae-477d-b502-01a2b8e38c87)

9- You can also see the API documentation with prisma-swagger with the address and test the connection from there:
http://localhost:3003/docs
![image](https://github.com/Walber2903/event-plataform-node-backend/assets/23461921/1dd1ddd0-526f-436e-a4b4-8cba8f52bbc6)

