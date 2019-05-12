package com.kpi.voting.controller;

import com.kpi.voting.domain.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 01.04.2019.
 */
@RestController
@RequestMapping("chat")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @GetMapping()
    public @ResponseBody List<String> getMessages() {
        return chatService.getAllMessages();
    }

    @PutMapping()
    public void sendMessage(@RequestBody String message) {
        chatService.saveMessage(message);
    }

}
