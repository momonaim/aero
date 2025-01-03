package com.flight.flight_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

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
    @JsonIgnore
    @JoinColumn(name = "reservation_id")
    private Reservation reservation;
    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "class_passager_id")
    private ClassPassager classPassager;

    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "categorie_id")
    private Categorie categorie;

    @JsonProperty("reservation_id")
    public Long getReservationId() {
        return reservation != null ? reservation.getId() : null;
    }

    @JsonProperty("class_passager_id")
    public Long getClassPassagerId() {
        return classPassager != null ? classPassager.getId() : null;
    }

    @JsonProperty("categorie_id")
    public Long getCategorieId() {
        return categorie != null ? categorie.getId() : null;
    }
}
