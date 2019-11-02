package com.natancode.desafioapirest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natancode.desafioapirest.domain.Curso;
import com.natancode.desafioapirest.repositories.CursoRepository;

@Service
public class CursoService {
	
	@Autowired
	private CursoRepository rp;
	
	public List<Curso> findAll(){
		return rp.findAll();
	}

}
