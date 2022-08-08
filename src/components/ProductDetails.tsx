import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductDetails (){
    const [product, setItems] = useState([]);
    const params = useParams();

    console.log(params.id);
 
    useEffect(() => {
        fetch(`http://localhost:4000/products${params.id}`)
            .then(res => res.json())
            .then(itemsFromServer => setItems(itemsFromServer));
    }
    , []);

    return (
        <div>
            <h1>
                {product.title}
            </h1>
        </div>
    )

    
}