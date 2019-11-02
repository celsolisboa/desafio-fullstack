package com.natancode.desafioapirest.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.natancode.desafioapirest.domain.Professor;
import com.natancode.desafioapirest.services.ProfessorService;

@RestController
@RequestMapping(value="/professores")
public class ProfessorResource {

	@Autowired
	private ProfessorService service;
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<?> findAll() {
		List<Professor> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}
