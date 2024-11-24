import { useState } from 'react'
import ChildComponent from './ChildComponent'

const FatherComponent = () => {
  const [products, setProducts] = useState([
    {id: 100000, name: 'Producto 1', price: 199990},
    {id: 100001, name: 'Producto 2', price: 199980},
    {id: 100010, name: 'Producto 3', price: 199890}
  ])

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId ))
  }
    // const [products, setProducts] = useState([]);

    // const handleAddProduct = (newProduct) => {
    //     setProducts(prev => [...prev, newProduct]);
    //   };
    
    //   const handleDeleteProduct = (productId) => {
    //     setProducts(prev => prev.filter(product => product.id !== productId));
    //   };

  return (
    <div>
      <h2>Lista de productos</h2>
      <ul>{products.map(product => ( 
        <ChildComponent key={product.id} product={product} deleteProduct={deleteProduct} /> ))} 
      </ul>
    </div>
    // <div className="container py-4">
    //     <p> (ejercicio 1) </p>
    //     <div className="row justify-content-center">
    //       <div className="col-md-12">
    //         <FormComponent onAddProduct={handleAddProduct} />
    //         <div className="mt-4">
    //           <h2 className="h4 mb-3">Lista de Productos</h2>
    //           <div>
    //             {products.map(product => (
    //               <ChildComponent
    //                 key={product.id}
    //                 product={product}
    //                 onDelete={handleDeleteProduct}
    //               />
    //             ))}
    //           </div>
    //           {products.length === 0 && (
    //             <div className="alert alert-info text-center">
    //               No hay productos agregados
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    );
}

export default FatherComponent

//   const deleteProduct = (productId) => {
//     setProducts(products.filter(product => product.id !== productId));
//   };

//   return (
//     <div>
//       <h2>Lista de Productos</h2>
//       <ul>
//         {products.map(product => (
//           <ChildComponent key={product.id} product={product} deleteProduct={deleteProduct} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FatherComponent;
