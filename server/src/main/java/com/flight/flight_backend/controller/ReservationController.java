package com.flight.flight_backend.controller;

import com.flight.flight_backend.model.Reservation;
import com.flight.flight_backend.model.Vol;
import com.flight.flight_backend.model.Utilisateur;
import com.flight.flight_backend.repository.ReservationRepository;
import com.flight.flight_backend.repository.UserRepository;
import com.flight.flight_backend.repository.VolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private VolRepository volRepository; // Repository to get Vol data

    @Autowired
    private UserRepository utilisateurRepository; // Repository to get user data

    // 1. Create Reservation
    @PostMapping("/reservations/create")
    public Reservation createReservation(
            @RequestParam Long volId,
            @RequestParam Long userId,
            @RequestParam int nbrBeneficier,
            @RequestParam double prixTotal) {

        Vol vol = volRepository.findById(volId).orElse(null);
        Utilisateur user = utilisateurRepository.findById(userId).orElse(null);

        if (vol == null || user == null) {
            throw new IllegalArgumentException("Invalid flight or user.");
        }

        Reservation reservation = new Reservation();
        reservation.setVol(vol);
        reservation.setUser(user);
        reservation.setNbrBeneficier(nbrBeneficier);
        reservation.setPrixTotal(prixTotal);

        return reservationRepository.save(reservation);
    }

    // 2. Get Reservation by ID
    @GetMapping("/reservation/{id}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable Long id) {
        Optional<Reservation> reservation = reservationRepository.findById(id);

        if (reservation.isPresent()) {
            return ResponseEntity.ok(reservation.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // 3. Get All Reservations
    @GetMapping("/reservations")
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    // 4. Update Reservation
    @PutMapping("/reservation/{id}")
    public ResponseEntity<Reservation> updateReservation(
            @PathVariable Long id,
            @RequestParam Long volId,
            @RequestParam Long userId,
            @RequestParam int nbrBeneficier,
            @RequestParam double prixTotal) {

        Optional<Reservation> optionalReservation = reservationRepository.findById(id);

        if (!optionalReservation.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Vol vol = volRepository.findById(volId).orElse(null);
        Utilisateur user = utilisateurRepository.findById(userId).orElse(null);

        if (vol == null || user == null) {
            return ResponseEntity.badRequest().body(null);
        }

        Reservation reservation = optionalReservation.get();
        reservation.setVol(vol);
        reservation.setUser(user);
        reservation.setNbrBeneficier(nbrBeneficier);
        reservation.setPrixTotal(prixTotal);

        Reservation updatedReservation = reservationRepository.save(reservation);
        return ResponseEntity.ok(updatedReservation);
    }

    // 5. Delete Reservation
    @DeleteMapping("/reservation/{id}")
    public ResponseEntity<Void> deleteReservation(@PathVariable Long id) {
        Optional<Reservation> reservation = reservationRepository.findById(id);

        if (reservation.isPresent()) {
            reservationRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
