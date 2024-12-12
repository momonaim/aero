package com.flight.flight_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.flight.flight_backend.exeption.UserNotFoundException;
import com.flight.flight_backend.model.Utilisateur;
import com.flight.flight_backend.repository.UserRepository;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    Utilisateur newUser(@RequestBody Utilisateur newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<Utilisateur> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    Utilisateur getUserById(@PathVariable Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    Utilisateur updateUser(@RequestBody Utilisateur newUser, @PathVariable Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setLastname(newUser.getLastname());
                    user.setFirstname(newUser.getFirstname());
                    user.setPhone(newUser.getPhone());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id " + id + " has been deleted success.";
    }

}
