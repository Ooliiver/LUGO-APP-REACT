import React from 'react';
import { Modal, Stack, Form, Button } from "react-bootstrap";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import añadirCliente from "../functions/añadirCliente";

function ModalAñadirCliente({
  isModalAñadirClientes,
  setIsModalAñadirClientes,
  actualizarEstadoClientes,
  usuario,
}) {
  function añadirClienteModal() {
    //obtener infor del formulario
    const id_nom = document.getElementById("id_nom").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const direccion = document.getElementById("direccion").value;
    const id_cli = document.getElementById("id_cli").value;
    // enviar informacion a firebase
    const infoCliente = { id_nom, telefono, correo, direccion, id_cli };
    añadirCliente(infoCliente, usuario);
    // cerrar modal
    actualizarEstadoClientes();
    setIsModalAñadirClientes(false);
  }

  return (
  
    <Modal className="layout-sidebar" show={isModalAñadirClientes} onHide={() => setIsModalAñadirClientes(false)} >
      <div className='card'>
        <Modal.Title>Añadir cliente</Modal.Title>
      </div>
      <Modal.Body>
        <Form>
          <Stack>
    
            <Form.Control
              id="id_nom"
              placeholder="Nombre"
              type="text"
              className="card"
            />
            <Form.Control
              id="telefono"
              placeholder="Telefono 10 digitos"
              type="number"
              className="card"
              
              
            />
            <Form.Control
              id="correo"
              placeholder="Correo"
              type="text"
              className="card"
            />
            <Form.Control
              id="direccion"
              placeholder="Direccion"
              type="text"
              className="card"
            />
            <Form.Control
              id="id_cli"
              placeholder="Numero de identificacion"
              type="text"
              className="card"
            />
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsModalAñadirClientes(false)}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={añadirClienteModal}>
          Añadir
        </Button>
      </Modal.Footer>
    </Modal>
  
  );
}

export default ModalAñadirCliente;
