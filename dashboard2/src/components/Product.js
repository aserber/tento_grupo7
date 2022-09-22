import React,{useState,useEffect} from "react";
import Categoria  from './Categoria';




//import MovieList from './MovieList';




function Product(){

   
    const [equipo, setEquipo] = React.useState([])

    useEffect(() => {
        
        console.log('useEffect')
        obtenerDatos()
        
    }, [])

    const obtenerDatos = async() => {
        const data = await fetch ("http://localhost:7001/api/products	")
        const users = await data.json()
        console.log(users)
        setEquipo(users.data)
    }
    if (!equipo || equipo.length <= 0){
        return <p> No hay informacion </p>
    } else {
    return (
        <div>
            
            <ul>
                {
                 equipo.map(item => (
                     <li key= {item.id}>{item.name} </li>
                     

                 )) 
                }
            
            
            
            </ul>
        </div>
    )}
            }






export default Product;