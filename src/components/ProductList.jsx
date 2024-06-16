import React from 'react';

const products = [
  { name: 'Syltherine', price: 'Rp 2.500.000', discount: '30%', image: '/src/assets/img/Project (1).png' },
  { name: 'Leviosa', price: 'Rp 2.500.000', discount: 'new', image: '/src/assets/img/Project (2).png' },
  { name: 'Syltherine', price: 'Rp 2.500.000', discount: '30%', image: '/src/assets/img/Project (1).png' },
  { name: 'Leviosa', price: 'Rp 2.500.000', discount: 'new', image: '/src/assets/img/Project (2).png' },
  { name: 'Syltherine', price: 'Rp 2.500.000', discount: '30%', image: '/src/assets/img/Project (1).png' },
  { name: 'Leviosa', price: 'Rp 2.500.000', discount: 'new', image: '/src/assets/img/Project (2).png' },
  { name: 'Syltherine', price: 'Rp 2.500.000', discount: '30%', image: '/src/assets/img/Project (1).png' },
  { name: 'Leviosa', price: 'Rp 2.500.000', discount: '23%', image: '/src/assets/img/Project (2).png' },
  
];

const ProductList = () => {
  return (
    <section className="product-list">
      <h2>Our Products</h2>
      <div className="products">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="inside">
              {product.discount && <div className="discount"><p className="p-page">{product.discount}</p></div>}
            </div>
            <div className="inside2">
              <h3>{product.name}</h3>
              <p>stylish piece of work</p>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;