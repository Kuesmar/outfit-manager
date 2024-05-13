import React from 'react';
import ProductList from './components/ProductsList';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';

function App() {
  const productListSlice = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const handlerDragEnd = () => {

  }

  return (
    <div>
      <h1>Hello World</h1>
      <DndContext collisionDetection={closestCenter}
      onDragEnd={handlerDragEnd}>
        <SortableContext
          items={productListSlice.productList}
          strategy={rectSortingStrategy}
        >
          <ProductList />
        </SortableContext>
      </DndContext>
    </div>
  )
}

export default App;
