package com.kpi.voting.dao.memoryStore;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 08.04.2019.
 */
@Component
public class ChatStore {

    private List<String> messages = Collections.synchronizedList(new ArrayList<>());

    public void addMessage(final String message) {
        messages.add(message);
    }

    public List<String> getMessages() {
        return messages;
    }

}
