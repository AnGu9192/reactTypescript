import React  from 'react';
import { useProducts } from './hooks/products';
import Product from './components/Product';
import Loader from './components/Loader';
import Errors from './components/Errors';

function App() {

  const {loading, error, products } = useProducts()
  
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Errors  error={error}/>}
      {products.map(product  => <Product product={product} key={product.id} />)}

    </div>
  );
}

export default App;
