package com.kpi.voting.entrancies;

import com.kpi.voting.domain.BannedUserService;
import org.springframework.beans.factory.annotation.Autowired;

public class Admin {
    @Autowired
    private BannedUserService bannedUserService;

}
