package com.clebeson.trabFinal.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.clebeson.trabFinal.model.ComandaModel;


public interface ComandaDAO extends JpaRepository<ComandaModel, Integer>{

}
