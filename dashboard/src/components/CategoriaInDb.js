import React from 'react';
import Categoria  from './Categoria';

let category = [
    {category: 'Chocolate'},
    {category: 'Pasteleria'},
    
]

function CategoriaInDb(){
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Products in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    category.map((category,index)=>{
                                        return  <Categoria  {...category}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}
export default CategoriaInDb;