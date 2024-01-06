package com.Neophyters.workoutappproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WorkoutAppProjectApplication {

	public static void main(String[] args) {
		DotenvLoader.loadDotenv();
		SpringApplication.run(WorkoutAppProjectApplication.class, args);
	}

}
