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

import com.clebeson.trabFinal.DAO.GrupoDAO;
import com.clebeson.trabFinal.model.GrupoModel;

@RestController
@RequestMapping({"/grupo"})
public class GrupoControler {
	
	private GrupoDAO grupo;
	
	GrupoControler(GrupoDAO GrupoDAO){
		this.grupo = GrupoDAO;
	}
	
	//Listar Grupos
	@CrossOrigin
	@GetMapping(path= {"/list"})
	List findAll() {
		return grupo.findAll();	
	}
	
	//Listar grupo
	@CrossOrigin
	@GetMapping(path= {"/{id}"})
	public ResponseEntity findByid(@PathVariable Integer id) {
		return grupo.findById(id)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	//Inserir grupo
	@CrossOrigin
	@PostMapping(path= {"/add"})
	public GrupoModel create(@RequestBody GrupoModel grupoModel) {
		return grupo.save(grupoModel);
	}
	
	//Atualizar grupo
	@CrossOrigin
	@PutMapping(value="/{id}")
	public ResponseEntity update (@PathVariable("id") Integer id,
			@RequestBody GrupoModel grupoModel) {
		return grupo.findById(id)
				.map(record ->{
					record.setDescricao(grupoModel.getDescricao());
					GrupoModel updated = grupo.save(record);
					return ResponseEntity.ok().body(updated);
				}).orElse(ResponseEntity.notFound().build());
	}
	
	//Apagar grupo
	@CrossOrigin
	@DeleteMapping(path= {"/delete/{id}"})
	public ResponseEntity<?>delete(@PathVariable Integer id){
		return grupo.findById(id)
				.map(record -> {
					grupo.deleteById(id);
					return ResponseEntity.ok().build();
				}).orElse(ResponseEntity.notFound().build());
	}

}
