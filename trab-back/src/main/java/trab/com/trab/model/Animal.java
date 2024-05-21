package trab.com.trab.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import trab.com.trab.model.dto.AnimalDTO;
import trab.com.trab.model.enums.AnimalStatusEnum;

import java.time.ZonedDateTime;

@Entity
@Getter
@Setter
@Table(name = "animal")
@AllArgsConstructor
@NoArgsConstructor
public class Animal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Long id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "animal_name", nullable = false)
    private String animalName;

    @Column(name = "color", nullable = false)
    private String color;

    @Column(name = "years", nullable = false)
    private Long years;

    @Column(name = "months", nullable = false)
    private Long months;

    @Column(name = "days", nullable = false)
    private Long days;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "about", nullable = false)
    private String about;

    @Column(name = "gender", nullable = false)
    private String gender;

    @Column(name = "castrate", nullable = false)
    private boolean castrate;

    @Column(name = "vaccines", nullable = false)
    private boolean vaccines;

    @Column(name = "other")
    private String other;

    @Column(name = "phone_tutor", nullable = false)
    private Long phoneTutor;

    @Column(name = "img", nullable = false)
    private String img;

    @Column(name = "status", nullable = false)
    private AnimalStatusEnum status;

    @ManyToOne
    @JoinColumn(name = "response_by")
    private User responseBy;

    @Column(name = "response_at")
    private ZonedDateTime responseAt;

    public Animal(Long id) {
        this.id = id;
    }

    public Animal(AnimalDTO animalRequest) {
        this.email = animalRequest.getEmail();
        this.animalName = animalRequest.getAnimalName();
        this.color = animalRequest.getColor();
        this.years = animalRequest.getYears();
        this.months = animalRequest.getMonths();
        this.days = animalRequest.getDays();
        this.city = animalRequest.getCity();
        this.about = animalRequest.getAbout();
        this.gender = animalRequest.getGender();
        this.castrate = animalRequest.isCastrate();
        this.vaccines = animalRequest.isVaccines();
        this.other = animalRequest.getOther();
        this.phoneTutor = animalRequest.getPhoneTutor();
        this.img = animalRequest.getImg();
        this.status = AnimalStatusEnum.ACCEPT;
    }
}
