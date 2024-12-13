package com.flight.flight_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flight.flight_backend.model.Avion;

public interface AvionRepository extends JpaRepository<Avion, Long> {

}