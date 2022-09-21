import React from 'react';
import {useEffect, useState} from 'react';  


function Productos(){
const [productos, setProductos] = useState([])

useEffect(() => {
        async function fetchData(){
            const response = await fetch ("http://localhost:7001/api/products/", {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            setProductos(data.data);
        }
        fetchData()
    },[]);

    return <div>
        <h1>Productos</h1>
    {
        productos.map(producto => {
            return(
                <div>
                    <h2>{producto.name}</h2>
                    <h2>{producto.image}</h2>
                </div>
            )
        })
    }
    </div>
}
    

export default Productos;