package com.natancode.desafioapirest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.natancode.desafioapirest.domain.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Integer> {

}
