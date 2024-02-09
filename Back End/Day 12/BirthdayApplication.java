package com.birthday.birthday;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.tags.Tag;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Super Star",
				version = "1.1.2",
				description = "Birthday Event Management",
				contact = @Contact(
						name = "Indhuprakash",
						email = "indhuprakash@gmail.com"
						)
				)
		)

@Tag(name="", description="")
public class BirthdayApplication {

	public static void main(String[] args) {
		SpringApplication.run(BirthdayApplication.class, args);
	}

}
