package com.flight.flight_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Billet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private double prix;
    @ManyToOne
    @JoinColumn(name = "reservation_id")
    private Reservation reservation;
    @OneToOne
    @JoinColumn(name = "class_passager_id")
    private ClassPassager classPassager;

    @OneToOne
    @JoinColumn(name = "categorie_id")
    private Categorie categorie;

}
