package com.natancode.desafioapirest.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.natancode.desafioapirest.domain.Curso;
import com.natancode.desafioapirest.services.CursoService;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping(value="/cursos")
public class CursoResource {

	@Autowired
	private CursoService service;
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<?> findAll() {
		List<Curso> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}
