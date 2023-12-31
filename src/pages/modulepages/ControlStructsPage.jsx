import { useEffect } from "react";
import { ButtonGroup, ScrollToTop , ClipBoard } from "../../components";

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

      <p className="mt-2 narrow-paragraph">
      En este módulo, vamos a explorar un aspecto fundamental de la programación: las 
      Estructuras de Control. Estas estructuras son como las herramientas que te permiten tomar 
      decisiones, repetir acciones y tener un mayor control sobre tu código.
      </p>



      <h3 className="mt-2">
      Condicionales: Tomando Decisiones en Programación  
      </h3>

      <p className="mt-2 narrow-paragraph">
      Las condicionales son como las bifurcaciones en un camino que te permiten decidir el  
      rumbo de tu programa. En Python, usamos condicionales para tomar decisiones lógicas.
      </p>

      <h5 className="mt-2">
      if - elif - else: Selección de Caminos
      </h5>

      <p className="mt-2 narrow-paragraph">
      Imagina que estás en una encrucijada y debes elegir un camino. Los condicionales
      funcionan de manera similar, te permiten elegir entre varias opciones en función de
      condiciones específicas.
      <ClipBoard codigo = 
      {
`edad = 12

if edad < 10:
    print("Eres un niño.")
elif edad >= 10 and edad < 18:
    print("Eres un adolescente.")
else:
    print("Eres un adulto.")`} />
      </p>

      <p className="mt-2 narrow-paragraph">
      Así, dependiendo de tu edad, se muestra un mensaje diferente.
      </p>

      <p className="mt-2 narrow-paragraph">
      Seguramente tambien te preguntas que son los simbolos ({"< y >="}) que aparecen en este
      codigo. Estos son valores de comparación de valores. Los basicos son ({"<, > y =="}) que son
      para comparar si un valor es menor o mayor que otro en el caso de los dos primeros o ver
      si ambos valores son iguales en el caso del tercero. También podemos ver si un valor es
      mayor o igual o si es menor o igual con los simbolos {("<=, >=")}. Como lo notaras es
      igual a como se ve en clases de matemáticas. Estos simbolos es muy comun usarlos en
      lascondicionales entonces recuerda siempre tenerlas en mente.
      </p>

      <h3 className="mt-2">
      Bucles: Repitiendo Acciones en Programación
      </h3>

      <p className="mt-2 narrow-paragraph">
      Los bucles son como ciclos que te permiten repetir una acción varias veces. Son útiles para
      realizar tareas repetitivas.
      </p>

      <h5 className="mt-2">
      while: La Repetición Controlada
      </h5>

      <p className="mt-2 narrow-paragraph">
      El bucle "while" te permite repetir una acción mientras una condición sea verdadera. Es 
      como repetir una tarea hasta que se cumpla cierta condición.
      <ClipBoard codigo = 
      {
`contador = 0

while contador < 5:
    print("Hola, mundo!")
    contador += 1`} />
      </p>

      <p className="mt-2 narrow-paragraph">
      Así, se imprime "Hola, mundo" cinco veces.  
      </p>

      <h5 className="mt-2">
      for: Recorriendo Elementos
      </h5>

      <p className="mt-2 narrow-paragraph">
      El bucle "for" es ideal para recorrer elementos en una colección, como una lista. Facilita la
      iteración a través de los elementos.
      <ClipBoard codigo = 
      {
`colores = ["rojo", "verde", "azul"]

for color in colores:
    print("Color: " + color)`} />
      </p>

      <p className="mt-2 narrow-paragraph">
      Esto mostrará los colores uno por uno.  
      </p>

      <h3 className="mt-2">
      Uso de las instrucciones break y continue
      </h3>

      <p className="mt-2 narrow-paragraph">
      Las instrucciones break y continue son herramientas adicionales para controlar tus
      estructuras de control.
      </p>

      <h5 className="mt-2">
      break: Rompiendo el Bucle
      </h5>

      <p className="mt-2 narrow-paragraph">
      La instrucción "break" te permite salir inmediatamente de un bucle si se cumple cierta
      condición.
      <ClipBoard codigo = 
      {
`for numero in range(10):
if numero == 5:
    break
print(numero)`} />
      </p>

      <p className="mt-2 narrow-paragraph">
      Esto imprimirá los números del 0 al 4 y luego saldrá del bucle.
      </p>

      <h5 className="mt-2">
      continue: Saltando Iteraciones
      </h5>

      <p className="mt-2 narrow-paragraph">
      La instrucción "continue" te permite saltar una iteración y pasar a la siguiente en un bucle.
      <ClipBoard codigo = 
      {
`for numero in range(10):
if numero % 2 == 0:
    continue
print(numero)`} />
      </p>

      {/* Ejemplo */}

      <p className="mt-2 narrow-paragraph">
      Esto imprimirá los números impares del 1 al 9, saltando los números pares.
      </p>

      <h3 className="mt-2">
      Resumen
      </h3>

      <ul className="narrow-paragraph">
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
