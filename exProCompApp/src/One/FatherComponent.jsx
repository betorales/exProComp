import { useState } from 'react'
import ChildComponent from './ChildComponent'

const FatherComponent = () => {
  // The products are simulated.
  // For a future deployment, they can be retrieved from the database.
  const [products, setProducts] = useState([
    {id: 100000, name: 'Producto 1', price: 199990},
    {id: 100001, name: 'Producto 2', price: 199980},
    {id: 100010, name: 'Producto 3', price: 199890}
  ])
  // Functionality for the delete button in child
  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId ))
  }

  return (
    <div>
      <h2>Lista de productos</h2>
      {/* "Map to display the products that exist at this moment */}
      <ul>{products.map(product => ( 
        <ChildComponent key={product.id} product={product} deleteProduct={deleteProduct} /> ))} 
      </ul>
    </div>
    );
}

export default FatherComponent