package testing.dao.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String login;
    @Column
    private String Password;

    @Column
    private Boolean ban_status;

    public User(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String Login) {
        this.login = Login;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public Boolean getBan_status() {
        return ban_status;
    }

    public void setBan_status(Boolean ban_status) {
        this.ban_status = ban_status;
    }
}
