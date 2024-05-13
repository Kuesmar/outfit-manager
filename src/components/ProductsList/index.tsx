import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { IProduct } from '../../types/entities';

const ProductList = () => {
  const productListSlice = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      {productListSlice.productList.map((eachProduct: IProduct) => (
        <div>
          <img src={eachProduct.image} alt={eachProduct.name} />
          <h1>{eachProduct.name}</h1>
          <h1>{`$ ${eachProduct.price}`}</h1>
        </div>
      ))}
    </div>
  )
};

export default ProductList;
