export function Product(props) {
const {name, price, category, imageUrl, stock, addToCart} = props;

return (
    <div id="product">
        <div id="text">
            <h1>Product: {name}</h1>
            <h1>Price: {price}$</h1>
            <h1>Category: {category}</h1>
            <h1>Stock: {stock}</h1>
            <button id="button" onClick={addToCart} disabled={stock == 0}>{stock > 0 ? "Add to cart" : "Out of stock"}</button>
        </div>
        <img src={imageUrl} id="image"></img>
    </div>
  );
}
