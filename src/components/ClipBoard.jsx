import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ClipBoard = ({codigo}) => {
  const [copiado, setCopiado] = useState(false);
  const codigoPython = codigo;

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(codigoPython).then(() => {
      setCopiado(true);
    });
  };

  return (
    <div>
      <SyntaxHighlighter language="python" style={solarizedlight}>
        {codigoPython}
      </SyntaxHighlighter>
      <button className='btn btn-dark' onClick={copiarAlPortapapeles}>Copiar al portapapeles</button>
      {copiado && <p>¡Código copiado al portapapeles!</p>}
    </div>
  );
};
