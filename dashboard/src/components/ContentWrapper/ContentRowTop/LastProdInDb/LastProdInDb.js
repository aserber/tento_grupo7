import React from "react";


function LastProdInDb (props){
    return(
        <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto en base de datos</h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '40rem'}} src={`https://github.com/aserber/tento_grupo7/blob/master/ProyeBase/public/images/products/${props.imagen}?raw=true `} alt=" UltimoProd" />
                        </div>
                        <p>{props.descripcion}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:7001/productos/detail/${props.id}`}>view Producto detail</a>
                      </div>
                    </div>
                  </div>
    )
}

export default LastProdInDb