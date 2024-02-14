package com.security.security;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Super Star Birthday Club",
				version = "1.1.2",
				description = "Birthday Event Management",
				contact = @Contact(
						name = "IndhuPrakash",
						email = "indhu24@gmail.com"
						)
				)
		)


public class SecurityApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecurityApplication.class, args);
	}

}
