import React from "react";

import { Modal, Stack, Form, Button } from "react-bootstrap";

import editarProducto from "../functions/editarProducto";

function ModalEditar({
  isModalEditar,
  setIsModalEditar,
  actualizarEstadoProductos,
  productoEditar,
  setProductoEditar,
  usuario,
}) {
  function editarProductoModal() {
    //obtener infor del formulario
    const titulo = document.getElementById("titulo").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const sku = document.getElementById("sku").value;
    // enviar informacion a firebase
    const infoProducto = { titulo, precio, cantidad, sku };
    editarProducto(infoProducto, usuario);
    // cerrar modal
    setProductoEditar(null);
    actualizarEstadoProductos();
    setIsModalEditar(false);
  }

  const [productoEstado, setProductoEstado] = React.useState({
    ...productoEditar,
  });

  return (
    <div className="layout-sidebar"
      show={isModalEditar}
      onHide={() => {
        setIsModalEditar(false);
        setProductoEditar(null);
      }}
    >
      <div className="card">
      <div>
        <th>Editar producto</th>
      </div>
      <div>
      <tbody>
        
         
            <Form.Control
              id="titulo"
              placeholder="Nombre del producto"
              type="text"
              className="card"
              value={productoEstado?.titulo}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  titulo: e.target.value,
                })
              }
            />
            <Form.Control
              id="precio"
              placeholder="Precio"
              type="number"
              className="card"
              value={productoEstado?.precio}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  precio: e.target.value,
                })
              }
            />
            <Form.Control
              id="cantidad"
              placeholder="Cantidad"
              type="number"
              className="card"
              value={productoEstado?.cantidad}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  cantidad: e.target.value,
                })
              }
            />
            <Form.Control
              id="sku"
              placeholder="SKU"
              type="text"
              className="card"
              value={productoEstado?.sku}
              onChange={(e) =>
                setProductoEstado({
                  ...productoEstado,
                  sku: e.target.value,
                })
              }
            />
          
        
      </tbody>
      </div>
        <Button
          variant="secondary"
          onClick={() => {
            setIsModalEditar(false);
            setProductoEditar(null);
          }}
        >
          Cancelar
        </Button>
        <Button variant="primary" onClick={editarProductoModal}>
          Editar
        </Button>
      </div>
    </div>
  );
}

export default ModalEditar;
