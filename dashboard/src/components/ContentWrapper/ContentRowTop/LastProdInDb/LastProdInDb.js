import React from "react";

function LastProdInDb (props){
    return(
        <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto en base</h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                        
                        </div>
                        <p>{props.descripcion}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:7001/productos/detail/${props.id}`}>view Producto detail</a>
                      </div>
                    </div>
                  </div>
    )
}

export default LastProdInDb