import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../../types/entities";
import {
    SortableContext,
    rectSortingStrategy,
    useSortable,
} from "@dnd-kit/sortable";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface EachProdProps {
    eachProd: IProduct;
}

const ProductCard = ({ eachProd }: EachProdProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: eachProd.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
            <img src={eachProd.image} alt={eachProd.name} />
            <p>{eachProd.name}</p>
            <p>{`$ ${eachProd.price}`}</p>
        </div>
    );
};

export default ProductCard;
