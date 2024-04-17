import React, { useEffect, useState } from "react"


function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8081/product')
    .then(res => res.json())
    .then(data =>setData(data))
    .catch(err => console.log(err));
  },[])

  return(
    <div className="container">
      <h1>Product List</h1>
      <div className="product-grid">
        {data.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image}  />
            <div>
              <h3>{product.product_name}</h3>
              <p>{product.description}</p>
              <p>Price: {product.pricing}</p>
              <p>Shipping Cost: {product.shipping_cost}</p>
              <button onClick={() => addToCart(product.product_id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;