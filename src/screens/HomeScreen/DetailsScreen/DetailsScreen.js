import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const DetailsScreen = () => {
    const { product } = useParams();

    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'This is the description of product 1.',
            price: 10.99,
            image: 'https://i.pinimg.com/originals/11/6d/d0/116dd000613206ef8d4c711844405791.jpg',
            category: 'Category 1'
        },
        {
            id: 2,
            name: 'Product 1,2',
            description: 'This is the description of product 1.',
            price: 10.99,
            image: 'https://i.pinimg.com/originals/11/6d/d0/116dd000613206ef8d4c711844405791.jpg',
            category: 'Category 1'
        },
        {
            id: 3,
            name: 'Product 2',
            description: 'This is the description of product 2.',
            price: 20.99,
            image: 'https://example.com/product2.jpg',
            category: 'Category 2'
        },
        {
            id: 4,
            name: 'Product 3',
            description: 'This is the description of product 1.',
            price: 5000,
            image: 'https://example.com/product1.jpg',
            category: 'Category 3'
        },
        {
            id: 5,
            name: 'Product 69',
            description: 'This is the description of product 1.',
            price: 5000,
            image: 'https://example.com/product1.jpg',
            category: 'SuperBike'
        },
    ];
    const productInfo = products.find(p => p.id === parseInt(product));

    return (
        <div>
            <h1>{productInfo.name}</h1>
            <p>{productInfo.description}</p>
            <p>Price: {productInfo.price}</p>
        </div>
    )
}
export default DetailsScreen