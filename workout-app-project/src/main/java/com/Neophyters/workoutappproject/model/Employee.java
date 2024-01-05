package com.Neophyters.workoutappproject.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Employee {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName;

    @Column(name="last_name", nullable = false, length = 50)
    private String lastName;
    
    @Column(name="email", length = 100)
    private String email;

    @Column(name="cell_phone", length = 20)
    private String cellPhone;

    @Column(name="date_of_birth")
    private String dateOfBirth;

}
