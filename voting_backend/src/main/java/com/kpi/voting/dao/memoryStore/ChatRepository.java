package com.kpi.voting.dao.memoryStore;

import com.kpi.voting.dao.memoryStore.ChatStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 08.04.2019.
 */
@Repository
public class ChatRepository {

    @Autowired
    private ChatStore chatStore;

    public void saveMessage(final String message) {
        chatStore.addMessage(message);
    }

    public List<String> findAllMessages() {
        return chatStore.getMessages();
    }

}
