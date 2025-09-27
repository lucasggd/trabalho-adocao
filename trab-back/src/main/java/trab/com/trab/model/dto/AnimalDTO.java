package trab.com.trab.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AnimalDTO {

    private String email;
    private String animalName;
    private String color;
    private Long years;
    private Long months;
    private Long days;
    private String city;
    private String about;
    private String gender;
    private String img;
    private boolean castrate;
    private boolean vaccines;
    private String other;
    private Long phoneTutor;

}
