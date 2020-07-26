import React from 'react';
function Product(props){
    return(
        <div className="todo-item">
            <h1>{props.product.name}</h1>
            <h2>Price:${props.product.price.toLocaleString("en-US",{style:"currency", currency:"USD"})
                }</h2>
            <p><h3>Description: </h3> {props.product.description}</p>
        </div>
    )
}

export default Product;