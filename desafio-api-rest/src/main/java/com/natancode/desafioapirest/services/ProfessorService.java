package com.natancode.desafioapirest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natancode.desafioapirest.domain.Professor;
import com.natancode.desafioapirest.repositories.ProfessorRepository;

@Service
public class ProfessorService {
	
	@Autowired
	private ProfessorRepository rp;
	
	public List<Professor> findAll(){
		return rp.findAll();
	}

}
