export interface IProduct {
    id: string;
    name: string;
    image: string;
    price: number;
};

export interface IProductsList {
    productList: Array<IProduct>;
};