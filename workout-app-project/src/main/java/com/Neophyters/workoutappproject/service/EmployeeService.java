package com.Neophyters.workoutappproject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Neophyters.workoutappproject.model.Employee;
import com.Neophyters.workoutappproject.repository.EmployeeRepository;

@Service
public class EmployeeService {
    
    @Autowired 
    EmployeeRepository employeeRepository;  

    public Integer addEmployee(Employee employee) {
        
        employeeRepository.save(employee);

        return employee.getId();
    }

    public Employee getEmployee(Integer id) {

        Optional<Employee> employeeOptional = employeeRepository.findById(id);
        if (employeeOptional.isPresent()) {
            return employeeOptional.get();
        } else {
            return null;
        }
    }

    public List<Employee> getEmployee(String firstName, String lastName) {
        Iterable<Employee> employeeIterable = employeeRepository.findByFirstNameAndLastName(firstName, lastName);

        return (List<Employee>) employeeIterable;
    }

}
