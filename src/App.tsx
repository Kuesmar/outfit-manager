import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { DndContext, DragStartEvent, closestCenter } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { IProduct, IProductsList } from "./types/entities";
import exampleProdList from "./products.json";

const defaultContent = [
    {
        id: "1",
        name: "",
        image: "",
        price: 0,
    },
];

function App() {
    const [initialProductList, setInitialProductList] = useState(defaultContent);
	const [gridProductList, setGridProductList] = useState(exampleProdList);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const data = await fetch(
                    "http://demo9820758.mockable.io/products"
                );
                return data.json();
            };
            fetchData().then((getInfo) => setInitialProductList(getInfo));
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handlerDragStart = (event: DragStartEvent) => {
        console.log("DragStart");
    };

    return (
        <div>
            <h1 className="text-4xl font-bold">Outfit Manager</h1>
            <DndContext
                collisionDetection={closestCenter}
                onDragStart={handlerDragStart}
            >
                <SortableContext
                    items={initialProductList}
                    strategy={rectSortingStrategy}
                >
                    <div className="flex">
                        {initialProductList.map((eachProduct: IProduct) => (
                            <div key={eachProduct.id}>
                                <ProductCard eachProd={eachProduct} />
                            </div>
                        ))}
                    </div>
                </SortableContext>
				<SortableContext
                    items={gridProductList}
                    strategy={rectSortingStrategy}
                >
                    <div className="flex">
                        {gridProductList.map((eachProduct: IProduct) => (
                            <div key={eachProduct.id}>
                                <ProductCard eachProd={eachProduct} />
                            </div>
                        ))}
                    </div>
                </SortableContext>
            </DndContext>
        </div>
    );
}

export default App;
