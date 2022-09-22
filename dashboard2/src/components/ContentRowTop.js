import React,{useState,useEffect} from "react";
import imagenFondo from '../assets/images/products/fotoProducto1.jpg';
import CategoriaInDb from './CategoriaInDb';
import ContentRowProducts from './ContentRowProducts';

function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

function ContentRowTop(){ 

    const [producto, setProducto] = useState([])

    useEffect(() => {
        
        console.log('useEffect')
        obtenerDatos()
        
    }, [])

    const obtenerDatos = async() => {
        const data = await fetch ("http://localhost:7001/api/products")
        const users = await data.json()
        console.log(users)
        setProducto(users.data)
    }
    if (!producto || producto.length <= 0){
        return <p> No hay informacion </p>
    } else {
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowProducts />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Best Product in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={images[0].default}  alt=" "/> 
									</div>
									<p>Bizcochuelo de chocolate con relleno de Mousse de Chocolate, decorado con bombones</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<CategoriaInDb />
					
						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}}
export default ContentRowTop;

