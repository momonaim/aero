package com.flight.flight_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flight.flight_backend.model.Utilisateur;

public interface UserRepository extends JpaRepository<Utilisateur, Long> {
    // Add custom methods for user repository here
    // For example:
    // public List<Utilisateur> findByUsername(String username);

}