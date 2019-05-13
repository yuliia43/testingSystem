package testing.dao.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Timestamp;

@Entity
public class BannedUser {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private Long userId;
    @Column
    private Timestamp unbanDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        userId = userId;
    }

    public Timestamp getUnbanDate() {
        return unbanDate;
    }

    public void setUnbanDate(Timestamp unbanDate) {
        this.unbanDate = unbanDate;
    }
}
