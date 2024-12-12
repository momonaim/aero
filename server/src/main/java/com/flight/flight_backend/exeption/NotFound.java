package com.flight.flight_backend.exeption;

public class NotFound extends RuntimeException {
    public NotFound(String entity, Long id) {
        super("Could not found the " + entity + " with id " + id);
    }
}
