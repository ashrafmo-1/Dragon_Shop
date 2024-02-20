import React from 'react';
import "./globals.scss"
import Image from "next/image"
import cart from "./assets/cart.png"
import showProduct from "./assets/eye.png"

const Boxes_products = async () => {

  const api = "https://database-products.onrender.com/products";
  const response = await fetch(api);
  const products = await response.json();

  const products_boxes = products.map((product) => {
    return (
      <div className='product_box'>
        <p className='product-category mb-4'> {product.category} </p>
          <img className='product_image' src={product.image} width={75} height={75} />
        <div className='content_box'>
          <div className='info'>
            <h3 className='product-title mt-4'> {product.title.length > 12 ? `${product.title.slice(0, 22)}..` : product.title}  </h3>
            <p className='rate'> Rate: {product.rating.rate} </p>
          </div>
          <div className='product_controls  d-flex gap-1'>
            <Image className='add_to_cart' src={cart} width={36} height={36} alt='add to cart' />
            <Image className='show_all_information' src={showProduct} width={36} height={36} alt='add to cart' />
          </div>
        </div>
      </div>
    )
  })

    return (
        <div className='get_products mt-4 bg-body-secondary'>
            <div className='products-section-title mb-5 text-center'>
                <h2 className='title'>The most important products</h2>
            </div>
            <div className='products_boxes' >
                {products_boxes}
            </div>
        </div>
    )
}

export default Boxes_products;