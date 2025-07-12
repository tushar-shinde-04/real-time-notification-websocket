let stompClient = null;

function connect() {
    const socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function () {
        console.log("Connected");

        stompClient.subscribe('/topic/notifications', function (notification) {
            const body = JSON.parse(notification.body);
            showNotification(`${body.sender}: ${body.message}`);
        });
    });
}

function showNotification(message) {
    const container = document.getElementById("notifications");
    const div = document.createElement("div");
    div.innerText = message;
    container.appendChild(div);
}

document.getElementById("notifyForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const message = document.getElementById("message").value;
    const sender = document.getElementById("sender").value;

    fetch("/send-notification", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `message=${encodeURIComponent(message)}&sender=${encodeURIComponent(sender)}`
    });

    document.getElementById("message").value = "";
    document.getElementById("sender").value = "";
});

connect();
