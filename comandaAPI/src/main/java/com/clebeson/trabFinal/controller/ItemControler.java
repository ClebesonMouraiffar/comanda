package com.clebeson.trabFinal.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clebeson.trabFinal.DAO.ItemDAO;
import com.clebeson.trabFinal.model.ItemModel;

@RestController
@RequestMapping({"/item"})
public class ItemControler {
	
	private ItemDAO item;
	
	ItemControler(ItemDAO ItemDAO){
		this.item = ItemDAO;
	}
	
	//Listar Itens
	@CrossOrigin
	@GetMapping(path= {"/list"})
	public List findAll() {
		return item.findAll();	
	}
	
	//Listar Item
	@CrossOrigin
	@GetMapping(path= {"/{id}"})
	public ResponseEntity findByid(@PathVariable Integer id) {
		return item.findById(id)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	//Inserir Item
	@CrossOrigin
	@PostMapping
	public ItemModel create(@RequestBody ItemModel itemModel) {
		return item.save(itemModel);
	}
	
	//Atualizar Item
	@CrossOrigin
	@PutMapping(value="/{id}")
	public ResponseEntity update (@PathVariable("id") Integer id,
			@RequestBody ItemModel itemModel) {
		return item.findById(id)
				.map(record ->{
					record.setName(itemModel.getName());
					record.setDescricao(itemModel.getDescricao());
					record.setValor(itemModel.getValor());
					record.setGrupo(itemModel.getGrupo());
					ItemModel updated = item.save(record);
					return ResponseEntity.ok().body(updated);
				}).orElse(ResponseEntity.notFound().build());
	}
	
	//Apagar Item
	@CrossOrigin
	@DeleteMapping(path= {"/{id}"})
	public ResponseEntity<?>delete(@PathVariable Integer id){
		return item.findById(id)
				.map(record -> {
					item.deleteById(id);
					return ResponseEntity.ok().build();
				}).orElse(ResponseEntity.notFound().build());
	}

}
