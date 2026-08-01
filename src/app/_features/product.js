export function Product(props) {
const {name, price, category, imageUrl} = props
    return (
    <div id="product">
        <div id="text">
            <h1>{name}</h1>
            <h1>{price}$</h1>
            <h1>{category}</h1>
        </div>
        <img src={imageUrl} id="image"></img>
    </div>
  );
}
