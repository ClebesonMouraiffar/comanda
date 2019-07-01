package com.clebeson.trabFinal.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class ItemModel {
	@Id
	   @GeneratedValue(strategy = GenerationType.IDENTITY)
	   private Integer id;

	   private String name;
	   private String descricao;
	   private float valor;
	   
	   
		@ManyToOne
		@JoinColumn(name="grupo_id")
		private GrupoModel grupo;
	   
	
	public ItemModel() {
		super();
	}
	

	public ItemModel(Integer id, String name, String descricao, float valor, GrupoModel grupo) {
		super();
		this.id = id;
		this.name = name;
		this.descricao = descricao;
		this.valor = valor;
		this.grupo = grupo;
	}

	

	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescricao() {
		return descricao;
	}


	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}


	public float getValor() {
		return valor;
	}


	public void setValor(float valor) {
		this.valor = valor;
	}


	public GrupoModel getGrupo() {
		return grupo;
	}


	public void setGrupo(GrupoModel grupo) {
		this.grupo = grupo;
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
		ItemModel other = (ItemModel) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	   
	   

}
