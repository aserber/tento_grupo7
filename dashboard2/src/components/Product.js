import React from 'react';
import { useEffect, useState } from 'react';

function Product() {
    const [equipo, setEquipo] = useState([])

    useEffect(() => {

        console.log('useEffect')
        obtenerDatos()

    }, [])

    const obtenerDatos = async () => {
        const data = await fetch("http://localhost:7001/api/products	")
        const users = await data.json()
        console.log(users)
        setEquipo(users.data)
    }
    if (!equipo || equipo.length <= 0) {
        return <p> No hay informacion </p>
    } else {

        return (
            <React.Fragment>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800">All products in our Data Base</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    {equipo.map(item => (
                                        <thead key={item.id}>
                                            <tr>
                                                <th>Id</th> 
                                                <tbody>
                                                    <tr>
                                                        <td>{item.id}</td>
                                                    </tr>
                                                </tbody>
                                                <th>Nombre</th> 
                                                <tbody>
                                                    <tr>
                                                        <td>{item.name}</td>
                                                    </tr>
                                                </tbody>
                                                <th>Categoria</th> 
                                                <tbody>
                                                    <tr>
                                                        <td>{item.productcategory.name}</td>
                                                    </tr>
                                                </tbody>
                                                <th>Precio</th> 
                                                <tbody>
                                                    <tr>
                                                        <td>{item.price}</td>
                                                    </tr>
                                                </tbody>
                                                <th>Descripcion</th> 
                                                <tbody>
                                                    <tr>
                                                        <td>{item.description}</td>
                                                    </tr>
                                                </tbody>
                                            </tr>
                                        </thead>

                                    ))}

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Product;