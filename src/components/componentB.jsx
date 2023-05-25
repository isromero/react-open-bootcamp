import React, { useState } from 'react';
import PropTypes from 'prop-types'

function ComponentB(state) {
	const [connected, setConnected] = useState(state);
  return (
	<div>
		<button onClick={() => setConnected(connected)}>{connected ? 'Contacto En Línea' : 'Contacto no disponible'}</button>
	</div>
  )
}

ComponentB.propTypes = {
	componentA: PropTypes.bool
}

export default ComponentB
