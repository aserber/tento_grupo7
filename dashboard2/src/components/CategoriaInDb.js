import React, {Component} from 'react';
import Categoria  from './Categoria';


//let categorias = [
//    {category: 'Chocolate'},
//    {category: 'Pasteleria'},
//    
//]

class CategoriaInDb extends Component {
    constructor(){
        super()
            this.state = {
                categorias: [],
                nombre: "componente",
                isFetch: true ,
            }
        
    }

    componentDidMount(){
        fetch('http://localhost:7001/api/categorias')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(cat => {
            this.setState
            ({categorias: cat.data, isFetch: false})
        })
        .catch(error => console.log(error))
    }

    render(){
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
                                    this.state.categorias.map((categoria,index)=>{
                                        
                                        return  <Categoria  {...categoria}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}}
export default CategoriaInDb;