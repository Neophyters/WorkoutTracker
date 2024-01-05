package com.Neophyters.workoutappproject.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Neophyters.workoutappproject.model.Employee;
import com.Neophyters.workoutappproject.service.EmployeeService;

@RestController
@RequestMapping("/basic")
public class BasicController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping("/addEmployee")
    public Integer addEmployee(
        @RequestHeader("firstName") String firstName,
        @RequestHeader("lastName") String lastName,
        @RequestHeader(name="email", required = false) String email,
        @RequestHeader(name="cellPhone", required = false) String cellPhone,
        @RequestHeader(name="dateOfBirth", required = false) String dateOfBirth
    ) {
        Employee employee = new Employee();
        employee.setFirstName(firstName);
        employee.setLastName(lastName);
        employee.setEmail(email);
        employee.setCellPhone(cellPhone);
        employee.setDateOfBirth(dateOfBirth);

        Integer id = employeeService.addEmployee(employee);

        return id;

    }   

    @GetMapping("/getEmployee")
    public List<Employee> getEmployee(
        @RequestHeader(name = "id", required = false) Integer id,
        @RequestHeader(name = "firstName", required = false) String firstName,
        @RequestHeader(name = "lastName", required = false) String lastName
    ) {
        if (id != null) {
            Employee employee = employeeService.getEmployee(id);
            return Arrays.asList(employee);
        } else if (firstName != null && lastName != null) {
            List<Employee> employees = employeeService.getEmployee(firstName, lastName);
            return employees;
        } else {
            return new ArrayList<Employee>();
        }
    }
}
