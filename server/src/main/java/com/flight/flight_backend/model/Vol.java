package com.flight.flight_backend.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Vol {

    // LOMBOK LOMBOK LOMBOKLOMBOKLOMBOKLOMBOK
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date DateDepart;
    private Date DateArrivee;
    private int CA_dispo;
    private int CE_dispo;
    private int CP_dispo;
    @ManyToOne
    @JoinColumn(name = "trajet_id")
    private Trajet trajet;

    @ManyToOne
    @JoinColumn(name = "avion_id")
    private Avion avion;
    private boolean isCanceled;

}
