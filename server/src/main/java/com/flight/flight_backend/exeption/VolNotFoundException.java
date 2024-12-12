package com.flight.flight_backend.exeption;

public class VolNotFoundException extends RuntimeException {
    public VolNotFoundException(Long id) {
        super("Could not found the flight with id " + id);
    }
}
