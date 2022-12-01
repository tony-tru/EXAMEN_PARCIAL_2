import React,{useState, useEffect} from 'react'
import {collection, getDocs , doc, deleteDoc} from 'firebase/firestore'
import {db} from '../fireBase/firebase'

const TableHeroes = () => {
  const [heroes, setHeroes]= useState([]);
  const heroesCollection = collection(db,"heroes");
  const getHeroes = async ()=> {
  const data = await  getDocs(heroesCollection)
  // console.log(data)
  setHeroes(
    data.docs.map((doc) => ({...doc.data(),id:doc.id}))
  )
  //  console.log(heroes)
  }
  const deleteHero = async (id) => {
    const heroDoc = doc(db, "heroes",id)
    await deleteDoc(heroDoc)
    getHeroes()
  }
  useEffect(() => {
    getHeroes()
  },[])
  return(
  <table>
    <thead>
      <tr>
        <th>Nombre Real</th>
        <th>Super Heroe</th>
        <th>Edad</th>
        <th>Sexo</th>
        <th>Origen</th>
        <th>Caracteristica</th>
      </tr>
    </thead>
    <tbody>
      
        {heroes.map((hero) => (
          <tr key={hero.id}>
            <td>{hero.nomrea}</td>
            <td>{hero.supher}</td>
            <td>{hero.edaher}</td>
            <td>{hero.sexher}</td>
            <td>{hero.oriher}</td>
            <td>{hero.carher}</td>
          </tr>

     ))} 
    </tbody>
  </table>
)
        }
export default TableHeroes