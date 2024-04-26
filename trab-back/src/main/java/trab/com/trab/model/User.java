package trab.com.trab.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import trab.com.trab.model.enums.UserStatusEnum;

import java.sql.Blob;

@Entity
@Getter
@Setter
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Long id;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "status", nullable = false)
    private UserStatusEnum status;

    public User() {
    }

    public User(String username, String email) {
        this.username = username;
        this.status = UserStatusEnum.NOT_CONFIRMED;
    }

    public User(Long id) {
        this.id = id;
    }
}
