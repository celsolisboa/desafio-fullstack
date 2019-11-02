package com.natancode.desafioapirest.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.natancode.desafioapirest.domain.Sala;
import com.natancode.desafioapirest.services.SalaService;

@RestController
@RequestMapping(value="/salas")
public class SalaResource {

	@Autowired
	private SalaService service;
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<?> findAll() {
		List<Sala> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}
