package trab.com.trab;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"trab.com.trab.controller"})
@ComponentScan(basePackages = {"trab.com.trab.service"})
@EnableJpaRepositories(basePackages = {"trab.com.trab.repository"})
public class TrabApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrabApplication.class, args);
	}

}
