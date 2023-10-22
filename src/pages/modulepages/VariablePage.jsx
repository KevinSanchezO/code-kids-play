import { useEffect } from "react"
import { ButtonGroup, ScrollToTop } from "../../components"


export const VariablePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
    <div className="d-flex flex-column align-items-center mt-3 p-4 animate__animated animate__rubberBand">
      <h1>
      Variables y Tipos de Datos
      </h1>

      <hr />

      <h3>
      ¿Qué son las variables?
      </h3>

      <p className="mt-2">
      Las variables son como cajas en las que puedes guardar información para usarla más tarde.<br/>  
      Imagina que tienes una caja llamada "nombre" en la que puedes guardar el nombre de tu <br/>
      mascota. Cuando quieras saber el nombre de tu mascota, solo tienes que abrir la caja  <br/>
      "nombre" y ver lo que hay adentro. Las variables son como estas cajas, y te ayudan a guardar  <br/>
      información en un programa de computadora.
      </p>

      {/* Ejemplo 1 */}

      <p className="mt-2">
      En este ejemplo, hemos creado una variable llamada 'nombre_mascota' y le hemos asignado<br/>
      el valor "Rex". Ahora, cuando necesitemos el nombre de nuestra mascota, podemos usar<br/>
      esta variable.
      </p>


      <h3 className="mt-2">
      Tipos de datos en Python: números,<br/>cadenas de texto y booleanos
      </h3>

      <p className="mt-2">
      Python es un lenguaje de programación que puede manejar diferentes tipos de datos. Aquí<br/>
      hay tres tipos de datos importantes que debes conocer:  
      </p>

      <h5 className="mt-2">
      1. Números  
      </h5>

      <p className="mt-2">
      Los números son útiles para hacer cálculos en la programación. Puedes tener números enteros<br/>
      (como 5) o números con decimales (como 3.14).  
      </p>

      {/* Ejemplo 2 */}

      <h5 className="mt-2">
      2. Cadenas de texto 
      </h5>

      <p className="mt-2">
      Las cadenas de texto son como palabras o frases que puedes usar en tus programas. Puedes<br/>
      poner texto entre comillas simples (' ') o comillas dobles (" ").  
      </p>

      {/* Ejemplo 3 */}

      <h5 className="mt-2">
      2. Booleanos
      </h5>

      <p className="mt-2">
      Los booleanos son como interruptores que pueden estar "encendidos" (True) o "apagados" <br/>
      (False). Los usamos para tomar decisiones en la programación.
      </p>

      {/* Ejemplo 4 */}

      <h3 className="mt-2">
      Declaración de variables y asignación de valores
      </h3>

      <p className="mt-2">
      Para crear una variable, primero debes declararla y luego asignarle un valor. La declaración <br/>
      le dice a la computadora que quieres usar una caja, y la asignación le dice qué guardar <br/>
      dentro de la caja.
      </p>

      {/* Ejemplo 5 */}

      <p className="mt-2">
      En este ejemplo, hemos declarado una variable llamada nombre y luego le hemos asignado<br/>
      el valor "Juan".
      </p>

      <h3 className="mt-2">
      Resumen
      </h3>

      <ul>
        <li>Las variables son como cajas para almacenar información.</li>
        <li>Python maneja diferentes tipos de datos, como números, cadenas de texto y booleanos.</li>
        <li>Para usar una variable, primero debes declararla y luego asignarle un valor.</li>
      </ul>

      <ButtonGroup 
        prev='/introduction' 
        next='/operations' 
        prevText="< Introducción" 
        nextText="Operaciones Básicas >"/>
    </div>

    <ScrollToTop/>
    </>
  )
}
