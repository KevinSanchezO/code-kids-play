import { useEffect } from "react"
import { ButtonGroup, ScrollToTop, ClipBoard } from "../../components"


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
      <ClipBoard codigo = 
      {
`nombre_mascota = "Rex"`} />
      </p>



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
      <ClipBoard codigo = 
      {
`edad = 10
nota = 8.5`
} />
      </p>

      <h5 className="mt-2">
      2. Cadenas de texto 
      </h5>

      <p className="mt-2">
      Las cadenas de texto son como palabras o frases que puedes usar en tus programas. Puedes<br/>
      poner texto entre comillas simples (' ') o comillas dobles (" "). 
      <ClipBoard codigo = 
      {
`nombre = "Luna"
frase = 'Hola, ¿cómo estás?'`
} /> 
      </p>

      <h5 className="mt-2">
      2. Booleanos
      </h5>

      <p className="mt-2">
      Los booleanos son como interruptores que pueden estar "encendidos" (True) o "apagados" <br/>
      (False). Los usamos para tomar decisiones en la programación.
      <ClipBoard codigo = 
      {
`es_dia_soleado = True
es_noche = False`
} /> 
      </p>

      <h3 className="mt-2">
      Declaración de variables y asignación de valores
      </h3>

      <p className="mt-2">
      Para crear una variable, primero debes declararla y luego asignarle un valor. La declaración <br/>
      le dice a la computadora que quieres usar una caja, y la asignación le dice qué guardar <br/>
      dentro de la caja.
      <ClipBoard codigo = 
      {
`# Declaración de variable
nombre = ""

# Asignación de valor
nombre = "Juan"`
} /> 
      </p>

      <p className="mt-2">
      En este ejemplo, hemos declarado una variable llamada nombre y luego le hemos asignado<br/>
      el valor "Juan".
      </p>

      <p className="mt-2">
        Por cierto ¿vez estas partes en el codigo con el simbolo numeral (#)? Esto es un comentario<br/>
        de codigo, con esto puedes escribir cosas que no se ejecutaran pero que sirven para<br/>
        explicar una seccion de codigo, siempre es bueno usarlo para explicar que hace algo y poder<br/>
        recordarlo cuando vuelvas a leerlo.
      </p>

      <h3 className="mt-2">
      Resumen
      </h3>

      <ul>
        <li>Las variables son como cajas para almacenar información.</li>
        <li>Python maneja diferentes tipos de datos, como números, cadenas de texto y booleanos.</li>
        <li>Para usar una variable, primero debes declararla y luego asignarle un valor.</li>
        <li>Los comentarios de codigo son lineas que no se ejecutan e inician con #</li>
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
