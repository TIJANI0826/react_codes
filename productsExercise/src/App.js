import React from 'react';
import logo from './logo.svg';
import './App.css';
import VschoolProducts from './vschoolProducts';
import Product from './Product';

function App() {
  const ProductComponent = VschoolProducts.map(function(product){
    return (<Product key={product.id} product={product}/>)
  })
  
  return (
    <div>
      {ProductComponent}
    </div>
  );
}

export default App;
