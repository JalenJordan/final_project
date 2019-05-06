import React from 'react'

function ProductTiles3(props){
    return(
        <>
            <a href={`items/${props.id}/${props.name}`} title={props.name}><img className="img-responsive" src={`images/product-img/${props.img}`} alt={props.name}/></a>
            <p>{props.name}</p>
            <label>{props.price}</label>
        </>
    )
}

export default ProductTiles3;