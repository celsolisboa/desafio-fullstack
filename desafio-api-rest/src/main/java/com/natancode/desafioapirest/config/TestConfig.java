package com.natancode.desafioapirest.config;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.natancode.desafioapirest.services.DBService;

@Configuration
@Profile("test")
public class TestConfig {

	@Autowired
	private DBService dbService; 

	@Bean
	public boolean instantiateDatabase() throws ParseException {
		dbService.instantiateTestDatabase(); //instancio a classe que popula o banco
		return true;
	}
}
