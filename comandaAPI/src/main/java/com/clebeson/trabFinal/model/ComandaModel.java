package com.clebeson.trabFinal.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class ComandaModel {
	@Id
	   @GeneratedValue(strategy = GenerationType.IDENTITY)
	   private Integer id;
	   
		@ManyToOne
		@JoinColumn(name="mesa_id")
		private MesaModel mesa;
		private float total;
	   
	   @ManyToMany
		@JoinTable(name = "itens", 
			joinColumns = @JoinColumn(name = "comanda_id"),
			inverseJoinColumns = @JoinColumn (name = "item_id")
		)
		private List<ItemModel> itens = new ArrayList<>();
	
	public ComandaModel() {
		super();
	}

	public ComandaModel(Integer id, MesaModel mesa, float total, List<ItemModel> itens) {
		super();
		this.id = id;
		this.mesa = mesa;
		this.total = total;
		this.itens = itens;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public MesaModel getMesa() {
		return mesa;
	}

	public void setMesa(MesaModel mesa) {
		this.mesa = mesa;
	}

	

	public List<ItemModel> getItens() {
		return itens;
	}



	public void setItens(List<ItemModel> itens) {
		this.itens = itens;
	}



	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ComandaModel other = (ComandaModel) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
	
}
	

	