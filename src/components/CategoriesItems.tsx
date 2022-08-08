import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function CategoriesItems(){
    // Fetch only items with same category
    const [product, setItems] = useState([]);
    const params = useParams();

    console.log(params.categoryId);
 
    useEffect(() => {
        fetch(`http://localhost:4000/products?categoryId=${params.categoryId}`)
            .then(res => res.json())
            .then(itemsFromServer => setItems(itemsFromServer));
    }
    , []);

    return (
        <ul className="products-container__list">
            {product.map(item => (
                <a href="">
                <li className="product-item" key={item.id}>
                    <img src={item.image} />
                    <h3>{item.title}</h3>
                </li>
                </a>
            ))}
        </ul>
    )
    
}


export default CategoriesItems;