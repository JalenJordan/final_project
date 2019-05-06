import React from 'react'

function ProductTiles2(props){
    return(
        <li>
            <a href={`items/${props.id}/${props.name}`} title={props.name}><img className="img-responsive" src={`images/${props.img}`} alt={props.name}/></a>
            <p>{props.name}</p>
            <label>{props.price}</label>
        </li>
    )
}

export default ProductTiles2;