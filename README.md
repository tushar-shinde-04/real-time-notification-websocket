# Real-Time Notification System using Spring Boot WebSockets #

This project demonstrates a real-time notification system using Spring Boot, WebSocket (STOMP over SockJS), and a basic HTML + JavaScript frontend. 
It showcases how to push updates from the server to connected clients instantly — perfect for chat apps, alerts, dashboards, or admin notifications.

---

## Features

-WebSocket connection using STOMP over SockJS
-Real-time broadcast of notifications to all connected clients
-Simple UI to send and receive messages
-REST endpoint to trigger notifications

-Easily extendable to support:
  -Private messaging
  -WebSocket authentication
  -Redis message broker
  -Frontend frameworks like React or Angular

------

## Architecture

Browser (JS/STOMP)
    ⇅  SockJS over /ws
Spring Boot WebSocket Broker
    ⇅  @Controller + SimpMessagingTemplate
REST API (/send-notification
-------

## How to Run

### Prerequisites

* Java 17+
* Maven

### Run with Maven

git clone https://github.com/your-username/real-time-notification-springboot.git
cd real-time-notification-springboot
mvn spring-boot:run


Visit: http://localhost:8080/
Open in multiple tabs to test real-time behavior.

---

## Test the API

You can also send notifications via `curl` or Postman:


curl -X POST http://localhost:8080/send-notification \
     -d "message=Hello users!" \
     -d "sender=System"


---

## Technologies Used

| Layer    | Technology                 |
| -------- | -------------------------- |
| Backend  | Spring Boot                |
| Realtime | Spring WebSocket + STOMP   |
| Frontend | HTML, JavaScript           |
| Optional | Thymeleaf (for templating) |
| Tooling  | Maven                      |

---

## Project Structure

src/
├── config/               # WebSocket configuration
├── controller/           # REST & WebSocket endpoints
├── model/                # Notification DTO
├── templates/            # index.html
├── static/js/            # app.js (STOMP client)
└── application.properties # Server config


---

## Future Improvements

** Send private user notifications (/user/queue/notifications)
** Add WebSocket authentication using JWT
** Persist notifications using JPA and MySQL
** Use Redis for scalable pub/sub
** Replace Thymeleaf with React or Angular

---

## 📄 License

MIT License — [see LICENSE](LICENSE)

---

## Author

Built by Tushar Shinde
If you found this useful, consider giving it a ⭐!

