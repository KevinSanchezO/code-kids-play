import { useEffect } from "react";
import { ButtonGroup, ScrollToTop, ClipBoard } from "../../components"

export const OperationsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
    <div className="d-flex flex-column align-items-center mt-3 p-4 animate__animated animate__rubberBand">
      <h1>
      Operaciones Básicas y Expresiones
      </h1>

      <hr />

      <h3>
      Operaciones matemáticas: suma, <br/>resta, multiplicación, división
      </h3>

      <p className="mt-2 narrow-paragraph">
      Las computadoras son basicamente calculadoras con demasiado musculo, realizan operaciones
      matemáticas para funcionar y ejecutar aplicaciones, no te preocupes si concideras dificil
      las mateáticas, en programación, puedes realizar operaciones matemáticas como lo haces en 
      la escuela con la diferencia que no debes hacer ningun proceso tedioso, solo decirle a la
      computadora que hacer y que ella se encargue. Aquí hay algunas operaciones básicas:
      </p>



      <h5 className="mt-2">
      1. Suma
      </h5>

      <p className="mt-2 narrow-paragraph">
      La suma es la acción de agregar números. En Python, puedes sumar números utilizando el 
      símbolo '+'.
      <ClipBoard codigo = 
      {
`resultado = 5 + 3`} />
      </p>

      <h5 className="mt-2">
      2. Resta
      </h5>

      <p className="mt-2 narrow-paragraph">
      La resta es la acción de quitar un número de otro. En Python, puedes restar números 
      utilizando el símbolo '-'.
      <ClipBoard codigo = 
      {
`resultado = 10 - 4`} />
      </p>

      <h5 className="mt-2">
      3. Multiplicación
      </h5>

      <p className="mt-2 narrow-paragraph">
      La multiplicación es la acción de repetir un número varias veces. En Python, puedes
      multiplicar números utilizando el símbolo '*'.
      <ClipBoard codigo = 
      {
`resultado = 3 * 7`} />
      </p>

      <h5 className="mt-2">
      4. División
      </h5>

      <p className="mt-2 narrow-paragraph">
      La división es la acción de repartir un número en partes iguales. En Python, puedes dividir
      números utilizando el símbolo '/'.
      <ClipBoard codigo = 
      {
`resultado = 12 / 4`} />
      </p>

      <h3 className="mt-2">
      Concatenación de cadenas de texto
      </h3>

      <p className="mt-2 narrow-paragraph">
      La concatenación es la acción de unir cadenas de texto. Puedes unir palabras o frases para
      crear una cadena de texto más larga en Python.
      <ClipBoard codigo = 
      {
`nombre = "Juan"
apellido = "Pérez"
nombre_completo = nombre + " " + apellido`} />
      </p>

      <p className="mt-2 narrow-paragraph">
      En este ejemplo, hemos unido las cadenas "nombre" y "apellido" para obtener "nombre_completo".
      </p>

      <h3 className="mt-2">
      Operadores lógicos: AND, OR, NOT
      </h3>

      <h5 className="mt-2 narrow-paragraph">
      1. and
      </h5>

      <p className="mt-2 narrow-paragraph">
      El operador lógico 'AND' se utiliza cuando necesitas que dos condiciones sean verdaderas
      para que se cumpla una expresión.
      <ClipBoard codigo = 
      {
`es_dia_soleado = True
temperatura_ideal = True

if es_dia_soleado and temperatura_ideal:
    print("Hace un buen día para salir.")`} />
      </p>

      <p className="mt-2 narrow-paragraph">
      Posiblemente te estas preguntando que es este if en el codigo. A esto se le conoce como
      un condicional, este le permite indicar al codigo que realice una acción si se cumple
      la condición especificada, en este caso que es_dia_soleado y temperatura_ideal sean True,
      se explicara más a fondo estas estructuras en la siguiente sección.
      </p>

      <p className="mt-2 narrow-paragraph">
      Seguramente tambien te estaras preguntando ¿qué es este print? Bueno, el print es una
      funcion, las cuales veremos más adelante, reservada de Python la cual dentro de los
      parentesis decimos que muestre en pantalla el valor que tenga, al correrla en tu entorno
      veras que en la terminal se muestra el texto dentro del print, es debido a su función de 
      escribir texto en la terminal.
      </p>

      <h5 className="mt-2">
      2. or
      </h5>

      <p className="mt-2 narrow-paragraph">
      El operador lógico OR se utiliza cuando solo una de las dos condiciones debe ser
      verdadera para que se cumpla una expresión.
      <ClipBoard codigo = 
      {
`llueve = False
nieva = True

if llueve or nieva:
    print("El clima está inclemente.")`} />
      </p>

      {/* Ejemplo */}
    
      <h5 className="mt-2">
      3. not
      </h5>

      <p className="mt-2 narrow-paragraph">
      El operador lógico 'NOT' se utiliza para negar una condición. Si una condición es verdadera,
      'NOT' la hace falsa y viceversa.
      <ClipBoard codigo = 
      {
`es_dia_soleado = True

if not es_dia_soleado:
    print("Hace mal tiempo.")`} />
      </p>

      {/* Ejemplo */}

      <h3 className="mt-2">
      Resumen
      </h3>

      <ul className="narrow-paragraph">
        <li>Puedes realizar operaciones matemáticas como suma, resta, multiplicación y división en Python.</li>
        <li>La concatenación de cadenas de texto te permite unir palabras o frases.</li>
        <li>Los operadores lógicos, como AND, OR y NOT, se utilizan para tomar decisiones en la programación.</li>
      </ul>

      <ButtonGroup 
        prev='/variables' 
        next='/controlstructs' 
        prevText="< Variables" 
        nextText="Estructuras de control >"/>
    </div>

    <ScrollToTop/>
    </>
  )
}
