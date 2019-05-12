package com.kpi.voting.domain;

import com.kpi.voting.dao.memoryStore.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 08.04.2019.
 */
@Service
public class ChatService {

    @Autowired
    private ChatRepository chatRepository;

    public void saveMessage(final String message) {
        chatRepository.saveMessage(message);
    }

    public List<String> getAllMessages() {
        return chatRepository.findAllMessages();
    }

}
