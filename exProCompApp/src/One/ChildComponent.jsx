// const ChildComponent = ({product, onDelete}) => {
//   return (
//     <div className="card mb-2">
//       <div className="card-body d-flex justify-content-between align-items-center">
//         <div>
//           <h5 className="card-title mb-1">Nombre del producto <br /> {product.name}</h5>
//           <p className="card-text text-muted mb-0">
//             Precio: ${product.price}
//           </p>
//         </div>
//         <button onClick={() => onDelete(product.id)} className="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
//       </div>
//     </div>
//   );
// }

// export default ChildComponent;

const ChildComponent = ({product, deleteProduct}) => {
  return (
    <div>
      <table className="table table-bordered align-middle">
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td><button onClick={() => deleteProduct(product.id)} className="btn btn-danger"><i class="bi bi-trash-fill"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ChildComponent