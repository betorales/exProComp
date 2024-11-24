import { useState, useEffect, useRef } from "react"
import SimpleReactValidator from 'simple-react-validator';


const FormComponent = ({onAddProduct}) => {
    const [productData, setProductData] = useState({
        name: '',
        price: ''
      });

      const [, forceUpdate] = useState()

      const validator = useRef(new SimpleReactValidator({
        messages: {
            required: 'Este campo es requerido',
            numeric: 'Este campo es numérico'
        },
        className: 'text-danger'
      }))

      useEffect(() => {
        validator.current.showMessages();
      }, []);

      const handleSubmit = (e) => {
        e.preventDefault();
        if (productData.name && productData.price) {
          onAddProduct({
            id: Date.now(),
            ...productData,
            price: Number(productData.price)
          });
          setProductData({ name: '', price: '' });
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData(prev => ({
          ...prev,
          [name]: value
        }));
      };

  return (
    <div className="card">
        <p>(ejercicio 2)</p>
      <div className="card-body">
        <h2 className="card-title mb-4">Agregar Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre del Producto
            </label>
            <input type="text" className="form-control" id="name" name="name" value={productData.name} onChange={handleChange} onBlur={() => validator.current.showMessageFor('name')}
            />
            {validator.current.message('name', productData.name, 'required|min:3|max:50')}
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Precio
            </label>
            <input type="number" className="form-control" id="price" name="price" value={productData.price} onChange={handleChange} onBlur={() => validator.current.showMessageFor('price')} step="1"
            />
            {validator.current.message('price', productData.price, 'required|numeric')}
          </div>
          <button type="submit" className="btn btn-primary"> Agregar Producto </button>
        </form>
      </div>
    </div>
  )
}

export default FormComponent;
