import React from 'react';
import { Modal, Stack, Form, Button } from "react-bootstrap";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import añadirProducto from "../functions/añadirProducto";

function ModalAñadir({
  isModalAñadir,
  setIsModalAñadir,
  actualizarEstadoProductos,
  usuario,
}) {
  function añadirProductoModal() {
    //obtener infor del formulario
    const titulo = document.getElementById("titulo").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const sku = document.getElementById("sku").value;
    // enviar informacion a firebase
    const infoProducto = { titulo, precio, cantidad, sku };
    añadirProducto(infoProducto, usuario);
    // cerrar modal
    actualizarEstadoProductos();
    setIsModalAñadir(false);
  }

  return (
    
    <Modal className="layout-sidebar" show={isModalAñadir} onHide={() => setIsModalAñadir(false)} >
      <div className='card'>
        <Modal.Title>Añadir producto</Modal.Title>
      </div>
      <Modal.Body>
        <Form>
          <Stack>
            <Form.Control
              id="titulo"
              placeholder="Nombre del producto"
              type="text"
              className="card"
            />
            <Form.Control
              id="precio"
              placeholder="Precio"
              type="number"
              className="card"
            />
            <Form.Control
              id="cantidad"
              placeholder="Cantidad"
              type="number"
              className="card"
            />
            <Form.Control
              id="sku"
              placeholder="SKU"
              type="text"
              className="card"
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsModalAñadir(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={añadirProductoModal}>
          Añadir
        </Button>
      </Modal.Footer>
    </Modal>
  
  );
}

export default ModalAñadir;
