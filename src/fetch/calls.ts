
const fetchProductList = async () => {
    const prodList = await fetch('http://demo9820758.mockable.io/products')
        .then((res) => {
            res.json();
        })
        .then((data) => {
            return data;
        })
    return prodList;
};

export default fetchProductList;
