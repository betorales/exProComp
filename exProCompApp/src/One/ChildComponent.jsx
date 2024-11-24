const ChildComponent = ({product, deleteProduct}) => {
  // It shows the products with the button. Also, it uses the trash's bootstrap icon
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