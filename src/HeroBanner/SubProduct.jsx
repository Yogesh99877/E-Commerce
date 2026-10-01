import React from 'react';

function SubProduct({ title, images }) {
  return (
    <div className="subproduct">
      <h2 style={{color:'black'}}>{title}</h2>

      <div className="product-images">
        {images.map((item, index) => (
          <div className="product-item" key={index}>
            <img src={item.img} alt={item.name || "Product"} />
            {item.name && <p>{item.name}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubProduct;