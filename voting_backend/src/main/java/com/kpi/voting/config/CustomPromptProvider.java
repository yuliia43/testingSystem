package com.kpi.voting.config;

import org.jline.utils.AttributedString;
import org.springframework.shell.jline.PromptProvider;
import org.springframework.stereotype.Component;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 10.01.2019.
 */
@Component
public class CustomPromptProvider implements PromptProvider {
    @Override
    public AttributedString getPrompt() {
        return new AttributedString("voter:>");
    }
}
