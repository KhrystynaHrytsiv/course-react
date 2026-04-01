import type {IProduct} from "../../interface/IProduct.ts";
import type {FC} from "react";
import './Product.css'

interface IProp {
    product:IProduct
}
const Product:FC<IProp> = ({product}) => {
    return (
        <div className={'block'}>
            <h3>{product.title}</h3>
            <div>{product.description}</div>
            <div>Category: {product.category}</div>
            <div>Price: {product.price}</div>
            <div>Discount Percentage: {product.discountPercentage}</div>
            <div>Rating: {product.rating}</div>
            <div>Stock: {product.stock}</div>
            <div>Tags: {product.tags}</div>
            <div>Brand: {product.brand}</div>
            <div>Sku: {product.sku}</div>
            <div>Weight: {product.weight}</div>
            <div>Dimensions height: {product.dimensions.height}</div>
            <div>Warranty Information: {product.warrantyInformation}</div>
            <div>Shipping Information: {product.shippingInformation}</div>
            <div>Availability Status: {product.availabilityStatus}</div>
                <div className={'reviewsContainer'}>Reviews:
                        {product.reviews.map(review =>
                            <div>
                                <div>Rating: {review.rating}</div>
                                <div>{review.comment}</div>
                                <div>Date: {review.date}</div>
                                <div>ReviewerName: {review.reviewerName}</div>
                                <div>ReviewerEmail: {review.reviewerEmail}</div>
                            </div>)}
                </div>
            <div>Return Policy: {product.returnPolicy}</div>
            <div>Minimum Order Quantity: {product.minimumOrderQuantity}</div>
            <div>Created at: {product.meta.createdAt}</div>
            <img src={product.thumbnail} alt={product.title}/>
                {product.images.length > 1 &&( <div className={'imageContainer'}>images:
                    {product.images.map(img => <img src={img} alt={'photo'}/>)}
            </div>)}
        </div>
    );
};

export {Product};