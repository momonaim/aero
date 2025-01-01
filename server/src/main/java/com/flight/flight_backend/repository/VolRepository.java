package com.flight.flight_backend.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.flight.flight_backend.model.Vol;

public interface VolRepository extends JpaRepository<Vol, Long> {

    public List<Vol> findByDateDepart(Date dateDepart);

    public List<Vol> findByDateDepartAndVilleDepartAndVilleArrivee(Date dateDepart, String villeDepart,
            String villeArrivee);

    @Query("SELECT v FROM Vol v WHERE v.villeDepart = :villeDepart AND v.villeArrivee = :villeArrivee")
    List<Vol> searchVols(
            @Param("villeDepart") String villeDepart,
            @Param("villeArrivee") String villeArrivee);

}