package com.Neophyters.workoutappproject.repository;

import org.springframework.data.repository.CrudRepository;
import com.Neophyters.workoutappproject.model.*;

public interface EmployeeRepository extends CrudRepository<Employee, Integer>{

    Iterable<Employee> findByFirstNameAndLastName(String firstName, String lastName);
    
}
