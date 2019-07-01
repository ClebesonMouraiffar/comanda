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

import com.clebeson.trabFinal.DAO.MesaDAO;
import com.clebeson.trabFinal.model.MesaModel;

@RestController
@RequestMapping({"/mesa"})
public class MesaControler {
	
	private MesaDAO mesa;
	
	MesaControler(MesaDAO mesaDAO){
		this.mesa = mesaDAO;
	}
	
	//Listar mesas
	@CrossOrigin
	@GetMapping(path= {"/list"})
	public List findAll() {
		return mesa.findAll();	
	}
	
	//Listar mesa
	@CrossOrigin
	@GetMapping(path= {"/{id}"})
	public ResponseEntity findByid(@PathVariable Integer id) {
		return mesa.findById(id)
				.map(record -> ResponseEntity.ok().body(record))
				.orElse(ResponseEntity.notFound().build());
	}
	
	//Inserir mesa
	@CrossOrigin
	@PostMapping(value="/add")
	public MesaModel create(@RequestBody MesaModel mesaModel) {
		return mesa.save(mesaModel);
	}
	
	//Atualizar mesa
	@CrossOrigin
	@PutMapping(value="/{id}")
	public ResponseEntity update (@PathVariable("id") Integer id,
			@RequestBody MesaModel mesaModel) {
		return mesa.findById(id)
				.map(record ->{
					record.setDescricao(mesaModel.getDescricao());
					MesaModel updated = mesa.save(record);
					return ResponseEntity.ok().body(updated);
				}).orElse(ResponseEntity.notFound().build());
	}
	
	//Apagar mesa
	@CrossOrigin
	@DeleteMapping(path= {"/{id}"})
	public ResponseEntity<?>delete(@PathVariable Integer id){
		return mesa.findById(id)
				.map(record -> {
					mesa.deleteById(id);
					return ResponseEntity.ok().build();
				}).orElse(ResponseEntity.notFound().build());
	}

}
