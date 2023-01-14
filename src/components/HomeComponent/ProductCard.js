import React from 'react'
import './ProductCard.css'

const ProductCard = ({ imageURL,name,price }) => {
    return (
        <div className='productCard'>
            <div className='productImageContainer'>
                <img width='100%' src={imageURL} />
                <p>{name}</p>
            </div>
            <div className='productDescription'>
                <h4>₹{price}</h4>
                <div>
                    <button>Add To Cart</button>
                    {/* <button><button>-</button><span>{0}</span><button>+</button></button> */}
                </div>
            </div>
        </div>
    )
}

export default ProductCard