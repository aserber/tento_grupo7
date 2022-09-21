import React from 'react';
import {useEffect} from 'react';  
function ProductsList(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {props.ProductsList}
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}console.log (props)
export default ProductsList;