import { useEffect } from "react";
import { ButtonGroup, ScrollToTop } from "../../components";

export const ControlStructsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
    <div className="d-flex flex-column align-items-center mt-3 p-4 animate__animated animate__rubberBand">
      <h1>
      Estructuras de Control
      </h1>

      <hr/>
      


      <h3>
      Introducción a las Estructuras de Control
      </h3>

      <p className="mt-2">
      En este módulo, vamos a explorar un aspecto fundamental de la programación: las <br/>
      Estructuras de Control. Estas estructuras son como las herramientas que te permiten tomar <br/>
      decisiones, repetir acciones y tener un mayor control sobre tu código.
      </p>



      <h3 className="mt-2">
      Condicionales: Tomando Decisiones en Programación  
      </h3>

      <p className="mt-2">
      Las condicionales son como las bifurcaciones en un camino que te permiten decidir el <br/>   
      rumbo de tu programa. En Python, usamos condicionales para tomar decisiones lógicas.
      </p>

      <h5 className="mt-2">
      if - elif - else: Selección de Caminos
      </h5>

      <p className="mt-2">
      Imagina que estás en una encrucijada y debes elegir un camino. Los condicionales <br/>
      funcionan de manera similar, te permiten elegir entre varias opciones en función de <br/>
      condiciones específicas.
      </p>

      {/* Ejemplo */}

      <p className="mt-2">
      Así, dependiendo de tu edad, se muestra un mensaje diferente.
      </p>



      <h3 className="mt-2">
      Bucles: Repitiendo Acciones en Programación
      </h3>

      <p className="mt-2">
      Los bucles son como ciclos que te permiten repetir una acción varias veces. Son útiles para <br/>
      realizar tareas repetitivas.
      </p>

      <h5 className="mt-2">
      while: La Repetición Controlada
      </h5>

      <p className="mt-2">
      El bucle "while" te permite repetir una acción mientras una condición sea verdadera. Es <br/>
      como repetir una tarea hasta que se cumpla cierta condición.
      </p>

      {/* Ejemplo */}

      <p className="mt-2">
      Así, se imprime "Hola, mundo" cinco veces.  
      </p>

      <h5 className="mt-2">
      for: Recorriendo Elementos
      </h5>

      <p className="mt-2">
      El bucle "for" es ideal para recorrer elementos en una colección, como una lista. Facilita la <br/>
      iteración a través de los elementos.
      </p>

      {/* Ejemplo */}

      <p className="mt-2">
      Esto mostrará los colores uno por uno.  
      </p>



      <h3 className="mt-2">
      Uso de las instrucciones break y continue
      </h3>

      <p className="mt-2">
      Las instrucciones break y continue son herramientas adicionales para controlar tus <br/>
      estructuras de control.
      </p>

      <h5 className="mt-2">
      break: Rompiendo el Bucle
      </h5>

      <p className="mt-2">
      La instrucción "break" te permite salir inmediatamente de un bucle si se cumple cierta <br/>  
      condición.
      </p>

      {/* Ejemplo */}

      <p className="mt-2">
      Esto imprimirá los números del 0 al 4 y luego saldrá del bucle.
      </p>

      <h5 className="mt-2">
      continue: Saltando Iteraciones
      </h5>

      <p className="mt-2">
      La instrucción "continue" te permite saltar una iteración y pasar a la siguiente en un bucle.
      </p>

      {/* Ejemplo */}

      <p className="mt-2">
      Esto imprimirá los números impares del 1 al 9, saltando los números pares.
      </p>

      

      <h3 className="mt-2">
      Resumen
      </h3>

      <ul>
        <li>Las Estructuras de Control son fundamentales en programación y te permiten tomar
        <br/>decisiones y repetir acciones. </li>
        <li>Los condicionales (if, elif, else) son como caminos que eliges en función de condiciones.</li>
        <li>Los bucles (while, for) son útiles para repetir acciones.</li>
        <li>Las instrucciones break y continue te brindan mayor control sobre tus estructuras de control.</li>
      </ul>

      <ButtonGroup 
        prev='/operations' 
        next='/functions' 
        prevText="< Operaciones" 
        nextText="Funciones >"/>
    </div>

    <ScrollToTop/>
    </>
  )
}
