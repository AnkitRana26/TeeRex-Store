import React from 'react'

const ProductCard = ({imageURL}) => {
    return (
        <div>
            <img width='100%' src={imageURL} />
        </div>
    )
}

export default ProductCard