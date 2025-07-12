package com.example.notification.controller;

import com.example.notification.model.NotificationMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
public class NotificationController {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @PostMapping("/send-notification")
    public ResponseEntity<Void> notifyAll(@RequestParam String message, @RequestParam String sender) {
        NotificationMessage notificationMessage = new NotificationMessage(message,sender);
        simpMessagingTemplate.convertAndSend("/topic/notifications", notificationMessage);
        return ResponseEntity.ok().build();
    }
}
