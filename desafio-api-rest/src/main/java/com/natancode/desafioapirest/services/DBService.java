package com.natancode.desafioapirest.services;

import java.text.ParseException;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natancode.desafioapirest.domain.Curso;
import com.natancode.desafioapirest.domain.Professor;
import com.natancode.desafioapirest.domain.Sala;
import com.natancode.desafioapirest.repositories.CursoRepository;
import com.natancode.desafioapirest.repositories.ProfessorRepository;
import com.natancode.desafioapirest.repositories.SalaRepository;

@Service
public class DBService {
	
	@Autowired
	private CursoRepository cursoRepository;
	
	@Autowired
	private ProfessorRepository professorRepository;
	
	@Autowired
	private SalaRepository salaRepository;

	public void instantiateTestDatabase() throws ParseException {
		
		Curso c1 = new Curso(null, "Biologia", "09:00 às 12:00");
		Curso c2 = new Curso(null, "História", "14:45 às 18:00");
		Curso c3 = new Curso(null, "Gestão", "09:30 às 12:30");
		Curso c4 = new Curso(null, "Matemática", "14:45 às 18:00");
		
		Professor p1 = new Professor(null, "Álvares de Azevedo");
		Professor p2 = new Professor(null, "Ruy Barbosa");
		Professor p3 = new Professor(null, "Agatha Christie");
		Professor p4 = new Professor(null, "Mario de Andrade");
		Professor p5 = new Professor(null, "Mário de Quintana");
		
		Sala s502 = new Sala(null, "502");
		Sala s402 = new Sala(null, "402");
		Sala s301 = new Sala(null, "301");
		Sala s302 = new Sala(null, "302");
		Sala s303 = new Sala(null, "303");
		
		c1.getProfessores().addAll(Arrays.asList(p1));
		c1.getSalas().addAll(Arrays.asList(s502));
		
		p1.getCursos().addAll(Arrays.asList(c1));
		s502.getCursos().addAll(Arrays.asList(c1));
		
		c2.getProfessores().addAll(Arrays.asList(p2, p3));
		c2.getSalas().addAll(Arrays.asList(s402));
		
		p2.getCursos().addAll(Arrays.asList(c2));
		p3.getCursos().addAll(Arrays.asList(c2));
		s402.getCursos().addAll(Arrays.asList(c2));
		
		cursoRepository.saveAll(Arrays.asList(c1, c2, c3, c4));
		professorRepository.saveAll(Arrays.asList(p1, p2, p3, p4));
		salaRepository.saveAll(Arrays.asList(s502, s402, s301, s302, s303));
	}
}
