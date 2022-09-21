import React from 'react';
import {useEffect} from 'react';
import SmallCard from './SmallCard';

//let productInDataBase = {
//    color:   "primary",
//    titulo: "Chocolates",
//    valor: 21,
//    icono: "fas fa-film",
//}
//
//
//let user = {
//    color:   "warning",
//    titulo: "Pasteleria",
//    valor: 49,
//    icono: "fas fa-user",
//}

//let cardProps = [productInDataBase,user];


function ContentRowTop(){

    

    const [equipo, setEquipo] = React.useState([])

    useEffect(() => {
        
        console.log('useEffect')
        obtenerDatos()
        
    }, [])

    const obtenerDatos = async() => {
        const data = await fetch ("http://localhost:7001/api/categorias")
        const users = await data.json()
        console.log(users)
        setEquipo(users.data)
    }
    if (!equipo || equipo.length <= 0){
        return <p> No hay informacion </p>
    } else {
    return (
        <div>
            <h1>Hola</h1>
            <ul>
                {
                 equipo.map(item => (
                     <li key= {item.id}>{item.name} </li>

                 )) 
                }
            
            
            
            </ul>
        </div>
    )}
    













  //return (
  //    <React.Fragment>
  //    {/*<!-- Content Row -->*/}
  //    <div className="row">
  //        {
  //            cardProps.map((producto,index)=>{
  //                return <SmallCard  {...producto}  key= {index}/>
  //            })
  //        }      
  //    </div>
  //    </React.Fragment>
  //)
}
export default ContentRowTop;