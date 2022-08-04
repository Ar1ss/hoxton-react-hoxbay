import { useEffect , useState } from "react";

// "products": [
//     {
//       "id": 1,
//       "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       "price": 109.95,
//       "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       "categoryId": 3,
//       "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//     },

 type StoreItem = {
    id: number,
    title: string,
    price: number,
    description: string,
    categoryId: number,
    image: string
    }

 
export function Home() {
    const [store, setStore] = useState<StoreItem[]>([]);
    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then(res => res.json())
            .then(storeFromServer => setStore(storeFromServer));
    }
    , []);

    return (
        <ul className="products-container__list">
            {store.map(item => (
                <a href="#">
                <li className="product-item" key={item.id}>
                    <img src={item.image} />
                    <h3>{item.title}</h3>
                </li>
                </a>
            ))}    
        </ul>
    )
}

export default Home;