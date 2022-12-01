import React, { useEffect, useState} from 'react';
import { collection, addDoc } from 'firebase/firestore';
import {db} from '../fireBase/firebase';

const FormHeroes = () => {

	const [nomrea, setNomrea]= useState('')
	const [supher, setSupher]= useState('')
	const [edaher, setEdaher]= useState(0)
	const [sexher, setSexher]= useState('')
	const [oriher, setOriher]= useState('')
    const [carher, setCarher]= useState('')
	const heroesCollection = collection(db,"heroes")

	const store = async (e) => {
		e.preventDefault()
		await addDoc(heroesCollection,{nomrea:nomrea, supher:supher,edaher:edaher, sexher:sexher,oriher:oriher,carher:carher,} )
	}
	return (
        <>
		<form onSubmit={store}>
			<label>Nombre Real</label>
			<input type="text" name="name" value={nomrea} onChange={(e) =>setNomrea(e.target.value)} required/>
			<label>Nombre De SuperHeroe</label>
			<input type="text" name="username" value={supher} onChange={(e) =>setSupher(e.target.value)} required/>
			<label>Edad</label>
			<input type="text" name="edad" value={edaher} onChange={(e) =>setEdaher(e.target.value)} required/>
			<label>Sexo</label>
			<select name="afi" value={sexher} onChange={(e) =>setSexher(e.target.value)} required>
			<option >Masculino</option>
			<option>Femenino</option>
            <option >No especificado</option>
			</select>
            <label>Origen</label>
			<select name="afi" value={oriher} onChange={(e) =>setOriher(e.target.value)} required>
			<option >Natural humano</option>
			<option >Extraterrestre</option>
            <option >Experimento cientifico</option>
			<option >Mutante</option>
			</select>
			<label>Caracteristicas</label>
			<input type='checkbox'/> Volar
            <input type='checkbox'/> Velocidad
            <input type='checkbox'/> Fuerza
            <input type='checkbox'/> Mutacion
            <input type='checkbox'/> Vision
            <input type='checkbox'/> Oido
            <input type='checkbox'/> Invulnerabilidad
            <input type='checkbox'/> Telepatia
            <input type='checkbox'/> Telequinesis
            <input type='checkbox'/> Lanza rayos
            <input type='checkbox'/> Artes marciales
            <input type='checkbox'/> Inteligencia
            <input type='checkbox'/> Acrobacia
            <input type='checkbox'/> Armadura
            <input type='checkbox'/> Tecnologia
            <br></br>
			<button type='submit' className="btn btn-dark">GUARDAR</button>
            <button type='submit' className="btn btn-danger">CANCELAR</button>
            <button type='submit' className="btn btn-warning">LIMPIAR</button>
		</form>
        </>
	)
}

export default FormHeroes