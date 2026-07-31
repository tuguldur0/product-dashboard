export function Product(props) {
const {name, price, category, imageUrl} = props
    return (
        <div id="main">
            <h1>{name}</h1>
            <h1>{price}</h1>
            <h1>{category}</h1>
            <img src={imageUrl}></img>
        </div>
  );
}
