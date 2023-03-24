import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../MotoShop/MotoCategoriesList.scss"

const MotoCategoriesList = ({ categories }) => {

    return (
        <div className='row justify-content-center'>
            {categories.map((category) => (
                <div class="col-md-5 ">
                    <div class="category-grid">
                        <div class="category-image">
                            <Link to={`/category/${category.name}`}>
                                <img class="pic-1" src={category.image} />
                                <div>
                                    <h2 className='category-title'>{category.name}</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    );
}
export default MotoCategoriesList