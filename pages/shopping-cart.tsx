import type { NextPage } from 'next'
import { useContext, useEffect } from 'react';

import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const ShoppingCart: NextPage = () => {
  const {  getProducts } = useContext(ShoppingCartContext);

  useEffect(() => {
    const products = getProducts();
    console.log(products);
  }, []);

  return (
    <>
      <h1>ShoppingCart works</h1>
    </>
  )
}

export default ShoppingCart;