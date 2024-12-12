package com.flight.flight_backend.exeption;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("Could not found the user with id " + id);
    }
}
