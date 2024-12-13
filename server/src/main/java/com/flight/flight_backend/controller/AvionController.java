package com.flight.flight_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.flight.flight_backend.exeption.NotFound;
import com.flight.flight_backend.model.Avion;
import com.flight.flight_backend.repository.AvionRepository;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class AvionController {

    @Autowired
    private AvionRepository avionRepository;

    @PostMapping("/avion")
    Avion newAvion(@RequestBody Avion newAvion) {
        return avionRepository.save(newAvion);
    }

    @GetMapping("/avions")
    List<Avion> getAllAvions() {
        return avionRepository.findAll();
    }

    @GetMapping("/avion/{id}")
    Avion getAvionById(@PathVariable Long id) {
        return avionRepository.findById(id)
                .orElseThrow(() -> new NotFound("AVION", id));
    }

    @PutMapping("/avion/{id}")
    Avion updateAvion(@RequestBody Avion newAvion, @PathVariable Long id) {
        return avionRepository.findById(id)
                .map(avion -> {
                    avion.setNom(newAvion.getNom());
                    avion.setVitesse(newAvion.getVitesse());
                    avion.setAutonomie(newAvion.getAutonomie());
                    avion.setCapacite_CA(newAvion.getCapacite_CA());
                    avion.setCapacite_CE(newAvion.getCapacite_CE());
                    avion.setCapacite_CP(newAvion.getCapacite_CP());
                    return avionRepository.save(avion);
                }).orElseThrow(() -> new NotFound("AVION", id));
    }

    @DeleteMapping("/avion/{id}")
    String deleteAvion(@PathVariable Long id) {
        if (!avionRepository.existsById(id)) {
            throw new NotFound("AVION", id);
        }
        avionRepository.deleteById(id);
        return "Avion with id " + id + " has been deleted success.";
    }

}
