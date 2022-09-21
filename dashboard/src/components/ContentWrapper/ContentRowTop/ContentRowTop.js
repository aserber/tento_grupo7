import React,{useState,useEffect} from "react";
import ContentRowCategory from "./ContentRowCategory/ContenRowCategory";
import LastProdInDb from "./LastProdInDb/LastProdInDb";
import MarcasInDb from "./MarcasInDb/MarcasInDb";



function ContentRowTop(){
  const [category,setCategory] = useState(["cargando datos"])
  const [productos,setProductos] = useState(["cargando Productos"])
  let datosPaProp =[]
  let ultimoProd;
  const fetchProductos = async () => {
    const res = await fetch("http://localhost:7001/api/categorias", {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    const categoryArr = await res.json()
    setCategory(categoryArr.meta.ProductCategory)
    setProductos(categoryArr.data)
}


  
	useEffect(()=>{
		fetchProductos()
	},[])

  if(category[0].categoria){
    datosPaProp= [
      {titulo: category[0].categoria, icon : "fa-dog", cantidad :category[0].cantidad,color :"primary"},
      {titulo: category[1].categoria, icon : "fa-cat", cantidad :category[1].cantidad,color :"success"},
      {titulo: category[2].categoria, icon : "fa-otter", cantidad :category[2].cantidad,color :"warning"}
      ]
  }else{
    datosPaProp =[
      {titulo: category, icon : "fa-film", cantidad :category,color :"primary"},
      {titulo: category, icon : "fa-award", cantidad :category,color :"success"},
      {titulo: category, icon : "fa-user", cantidad :category,color :"warning"}
      ]
  }
    
    if(productos[productos.length-1].id){
      ultimoProd = productos[productos.length-1]
    }
    return (
        <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard Tento</h1>
                </div>
                <div className="row">
                {/* Content Row Movies*/}
                {datosPaProp.map((item,i)=>{
                    return(
                        <ContentRowCategory  key={i} {...item}/>)

                })}
                </div>
                {/* End movies in Data Base */}
                {/* Content Row Last Movie in Data Base */}
                <div className="row">
                  {/* Last Movie in DB */}
                  
                  <LastProdInDb {...ultimoProd}/>
                  {/* End content row last movie in Data Base */}
                  {/* Genres in DB */}
                  <MarcasInDb />
                </div>
              </div>
    )
}

export default ContentRowTop