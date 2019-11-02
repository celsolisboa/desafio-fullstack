package com.natancode.desafioapirest.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private Environment env;

	private static final String[] PUBLIC_MATCHERS = { //Tudo que virer apartir de h2-console está liberado
			"/h2-console/**"
	};

	private static final String[] PUBLIC_MATCHERS_GET = { //Acesso de leitura
			"/cursos/**",
			"/salas/**",
			"/professores/**"

	};

	@Override
	public void configure(HttpSecurity http) throws Exception {

		//se nos profiles ativos, estiver no profile test, significa que preciso usar o H2
		if (Arrays.asList(env.getActiveProfiles()).contains("test")) {
            http.headers().frameOptions().disable(); //Libera o acesso ao H2
        }

		//chama as configurações de cors que o método abaixo implementa
		http.cors().and().csrf().disable(); //Como não armazenamos sessão o csrf fica desabilitado
		http.authorizeRequests()
		.antMatchers(HttpMethod.GET, PUBLIC_MATCHERS_GET).permitAll() //Só permite métodos de leitura
		.antMatchers(PUBLIC_MATCHERS).permitAll()//todos os caminhos que estiverem no meu vetor acima, ou permitir o acesso
		.anyRequest().authenticated(); //todos os outros caminhos é exigido autenticação
		//Para garantir que o nosso sistema não vai usar sessão de usuário
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}

	//Estou permitindo acessos ao meu endpoint usando as configurações básicas de cors
	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
		return source;
	}
}