package com.clebeson.trabFinal.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.clebeson.trabFinal.model.ItemModel;

public interface ItemDAO extends JpaRepository<ItemModel, Integer>{

}
