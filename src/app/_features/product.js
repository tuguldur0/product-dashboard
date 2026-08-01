export function Product(props) {
const {name, price, category, imageUrl, stock, setStock} = props;

const addToCart = () => {
    setStock(stock - 1);
}

return (
    <div id="product">
        <div id="text">
            <h1>Product: {name}</h1>
            <h1>Price: {price}$</h1>
            <h1>Category: {category}</h1>
            <h1>Stock: {stock}</h1>
            <button id="button" onClick={addToCart}>Add to cart</button>
        </div>
        <img src={imageUrl} id="image"></img>
    </div>
  );
}
