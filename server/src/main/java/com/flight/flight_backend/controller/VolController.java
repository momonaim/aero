package com.flight.flight_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.flight.flight_backend.exeption.NotFound;
import com.flight.flight_backend.exeption.VolNotFoundException;
import com.flight.flight_backend.model.Vol;
import com.flight.flight_backend.repository.VolRepository;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class VolController {

    @Autowired
    private VolRepository volRepository;

    @PostMapping("/vol")
    Vol newVol(@RequestBody Vol newVol) {
        return volRepository.save(newVol);
    }

    @GetMapping("/vols")
    List<Vol> getAllVols() {
        return volRepository.findAll();
    }

    @GetMapping("/vol/{id}")
    Vol getVolById(@PathVariable Long id) {
        return volRepository.findById(id)
                .orElseThrow(() -> new NotFound("VVVVV", id));
    }

    @PutMapping("/vol/{id}")
    Vol updateVol(@RequestBody Vol newVol, @PathVariable Long id) {
        return volRepository.findById(id)
                .map(vol -> {
                    vol.setDateDepart(newVol.getDateDepart());
                    vol.setDateArrivee(newVol.getDateArrivee());
                    vol.setCanceled(newVol.isCanceled());
                    vol.setCA_dispo(newVol.getCA_dispo());
                    vol.setCE_dispo(newVol.getCE_dispo());
                    vol.setCP_dispo(newVol.getCP_dispo());
                    return volRepository.save(vol);
                }).orElseThrow(() -> new VolNotFoundException(id));
    }

    @DeleteMapping("/vol/{id}")
    String deleteVol(@PathVariable Long id) {
        if (!volRepository.existsById(id)) {
            throw new VolNotFoundException(id);
        }
        volRepository.deleteById(id);
        return "Vol with id " + id + " has been deleted success.";
    }

}