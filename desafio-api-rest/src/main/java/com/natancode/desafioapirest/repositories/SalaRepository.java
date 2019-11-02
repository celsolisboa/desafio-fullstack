package com.natancode.desafioapirest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.natancode.desafioapirest.domain.Sala;


@Repository
public interface SalaRepository extends JpaRepository<Sala, Integer> {

}
