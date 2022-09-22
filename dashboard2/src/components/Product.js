import React from 'react';
import { useEffect, useState } from 'react';

function Product() {
    const [equipo, setEquipo] = useState([])

    useEffect(() => {

        console.log('useEffect')
        obtenerDatos()

    }, [])

    const obtenerDatos = async () => {
        const data = await fetch("http://localhost:7001/api/products")
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
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Categoria</th>
                                            <th>Precio</th>
                                            <th>Descripcion</th>
                                        </tr>
                                    </thead>
                                    {equipo.map(item => (
                                        <tbody key={item.id}>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.productcategory.name}</td>
                                                <td>{item.price}</td>
                                                <td>{item.description}</td>
                                            </tr>
                                        </tbody>

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