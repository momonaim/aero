package com.flight.flight_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flight.flight_backend.model.Vol;

public interface VolRepository extends JpaRepository<Vol, Long> {

}