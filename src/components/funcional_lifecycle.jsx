import React, { useState, useEffect } from 'react';

const FuncionalLifecycle = () => {
  const initialState = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José'
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setState((prevState) => ({
      ...prevState,
      fecha: new Date(),
      edad: prevState.edad + 1
    }));
  };

  return (
    <div>
      <h2>
        Hora Actual: {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>{state.nombre} {state.apellidos}</h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};

export default FuncionalLifecycle;
