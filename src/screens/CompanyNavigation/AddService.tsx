import React, { useState } from "react";
import Form from "../../components/Form";

const AddService = () => {
  const [newService, setNewService] = useState({
    id: 1,
    serviceName: "",
    duration: 0,
    price: 0,
  });

  const handleAddService = () => {
    // Aquí implementare la lógica para guardar el nuevo servicio en mi base de datos
    console.log("Adding service:", { newService });
    // realizar la navegación hacia el home
  };

  return (
    <Form
      buttonName="Add Service"
      handleService={handleAddService}
      item={newService}
    />
  );
};

export default AddService;
