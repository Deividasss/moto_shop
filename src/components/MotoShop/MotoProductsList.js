import { useParams, Link } from 'react-router-dom';

const MotoProductsList = () => {

    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'This is the description of product 1.',
            price: 10.99,
            image: 'https://i.pinimg.com/originals/11/6d/d0/116dd000613206ef8d4c711844405791.jpg',
            category: 'SuperMoto'
        },
        {
            id: 2,
            name: 'Product 1,2',
            description: 'This is the description of product 1.',
            price: 10.99,
            image: 'https://i.pinimg.com/originals/11/6d/d0/116dd000613206ef8d4c711844405791.jpg',
            category: 'SuperMoto'
        },
        {
            id: 3,
            name: 'Product 2',
            description: 'This is the description of product 2.',
            price: 20.99,
            image: 'https://i.pinimg.com/originals/11/6d/d0/116dd000613206ef8d4c711844405791.jpg',
            category: 'MotoCross'
        },
        {
            id: 4,
            name: 'Product 3',
            description: 'This is the description of product 1.',
            price: 5000,
            image: 'https://i.pinimg.com/originals/11/6d/d0/116dd000613206ef8d4c711844405791.jpg',
            category: 'StreetBike'
        },
        {
            id: 5,
            name: 'Product 4',
            description: 'This is the description of product 1.',
            price: 50040,
            image: 'https://i.pinimg.com/originals/11/6d/d0/116dd000613206ef8d4c711844405791.jpg',
            category: 'SuperBike'
        }
    ];

    const { category } = useParams();

    const filteredProducts = products.filter((product) => product.category === category);

    return (
        <>
            <div className='row justify-content-center'>
                {filteredProducts.map((product) => (
                    <div class="col-md-3  ">
                        <div class="product-grid">
                            <div class="product-image">
                                <Link to={`/details/${product.id}`}><img class="pic-1" src={product.image} /></Link>
                            </div>
                            <div class="product-content">
                                <h3 className="product-title" style={{ color: 'black' }}>{product.id}</h3>
                                <hr className="line"></hr>
                                <h3 className="product-collection">Developer<span className="product-network">{product.description}</span></h3>
                                <h3 className="product-collection">Genre<span className="product-network">{product.price}</span></h3>
                                <h3 className="product-collection">Platform<span className="product-network">{product.category}</span></h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default MotoProductsList