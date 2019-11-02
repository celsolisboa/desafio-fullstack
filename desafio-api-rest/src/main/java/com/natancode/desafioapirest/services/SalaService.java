package com.natancode.desafioapirest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natancode.desafioapirest.domain.Sala;
import com.natancode.desafioapirest.repositories.SalaRepository;

@Service
public class SalaService {
	
	@Autowired
	private SalaRepository rp;
	
	public List<Sala> findAll(){
		return rp.findAll();
	}
	
}
