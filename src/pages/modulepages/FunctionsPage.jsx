import { useEffect } from "react";
import { ButtonGroup, ClipBoard, ScrollToTop } from "../../components";

export const FunctionsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  return(
    <>
    <div className="d-flex flex-column align-items-center mt-3 p-4 animate__animated animate__rubberBand">
      <h1>
        Funciones
      </h1>

      <hr/>

      <h3>
        ¿Qué son las funciones?
      </h3>

      <p className="mt-2 narrow-paragraph">
      En este módulo, vamos a sumergirnos en el concepto de las funciones en la programación.
      Las funciones son como recetas o ordenes que te permiten organizar y reutilizar tu código
      de una manera sencilla y poderosa.
      </p>

      <h3>
      Declaración y llamada de funciones
      </h3>

      <p className="mt-2 narrow-paragraph">
      Las funciones se componen de dos partes: la declaración y la llamada. La declaración define
      lo que hace la función, y la llamada la utiliza en tu código.
      </p>

      <h5>
      Declaración: Crear la función
      </h5>

      <p className="mt-2 narrow-paragraph">
      Un ejemplo de como se declara una función en Python es de la siguiente manera. Primero
      se usa la palabra def para indicar que esta iniciando la declaración de una función, luego
      sigue el nombrar la función en este caso con el nombre {"'saludar'"} y un par de parentesis
      al lado seguido de dos puntos.
      <ClipBoard codigo = 
      {
`def saludar():
    print("¡Hola, mago!")
`}/>
      </p>

      <h5>
      Llamada: Hacer uso de la función
      </h5>

      <p className="mt-2 narrow-paragraph">
      Ahora que has creado tu hechizo, puedes usarlo en tu código, en el mismo archivo donde
      declaraste la anterior función solo ocupas llamarla con su nombre y parentesis.

      <ClipBoard codigo = 
      {
`saludar()  # Esto imprime "¡Hola, mago!" en la pantalla.`}/>
      </p>

      <p className="mt-2 narrow-paragraph">
      Basicamente, una declaración y una llamada de una función queda de la siguiente manera.
      y al ejecutar el siguiente codigo podras ver como se escribe en pantalla {`"¡Hola, mago!"`}
      <ClipBoard codigo = 
      {
`def saludar():
    print("¡Hola, mago!")
saludar()
`}/>
      </p>

      <h3>
      Parámetros y argumentos en funciones
      </h3>

      <p className="mt-2 narrow-paragraph">
      Las funciones pueden recibir parámetros o argumentos para realizar acciones específicas.
      segun la información que presente este o estos valores.

      Por ejemplo, imagina que quieres crear una función que salude a alguien en particular.
      Puedes usar un parámetro para personalizarlo.

      <ClipBoard codigo = 
      {
`def saludar_a(nombre):
    print("¡Hola, " + nombre + "!")
`}/> 
      </p>

      <p className="mt-2 narrow-paragraph">
      Ahora cuando llamas a la función, le pasas el argumento, que es el valor real que se usará
      en la función.   

      <ClipBoard codigo = 
      {
`saludar_a("Luna")  # Esto imprimirá "¡Hola, Luna!"
`}/> 
      </p>

      <h3>
      Funciones predefinidas y definidas por el usuario  
      </h3>

      <p className="mt-2 narrow-paragraph">
      En Python, tienes acceso a funciones predefinidas que hacen muchas tareas útiles. También
      puedes crear tus propias funciones personalizadas.  
      </p>

      <h5>
      Funciones predefinidas  
      </h5>

      <p className="mt-2 narrow-paragraph">
      Python viene con muchas funciones predefinidas que puedes usar de inmediato. Por 
      ejemplo, la función "len()" te dice la longitud o cantidad de elementos de una lista.

      <ClipBoard codigo = 
      {
`frutas = ["manzana", "plátano", "naranja"]
longitud = len(frutas)  # Esto devuelve 3
`}/> 
      </p>

      <h5>
      Funciones definidas por el usuario
      </h5>

      <p className="mt-2 narrow-paragraph">
      También puedes crear tus propias funciones personalizadas. Esto te permite organizar y
      reutilizar tu código.

      <ClipBoard codigo = 
      {
`def suma(numero1, numero2):
    resultado = numero1 + numero2
    return resultado
`}/> 
      </p>

      <p className="mt-2 narrow-paragraph">
      Aquí hemos definido una función llamada "suma" que toma dos números y devuelve su
      suma. Las funciones pueden retornar resultados y esto se realiza con la palabra
      reservada return. Esto puede permitir guardar las funciones como variables o
      como valores.
      <ClipBoard codigo = 
      {
`def suma(numero1, numero2):
    resultado = numero1 + numero2
    return resultado

valor = suma(5, 3)
print(valor) # Esto mostrara 8

otro_valor = suma(6,2) + 2 # La función retorna 8 y se le suma 2 son 10
print(otro_valor)
`}/> 
      </p>

      <h3 className="mt-2">
      Resumen
      </h3>

      <ul className="narrow-paragraph">
        <li>Las funciones son como recetas que te permiten organizar y reutilizar tu código de manera efectiva.</li>
        <li>Una función consta de dos partes: la declaración, donde defines cómo funciona, y la llamada,<br/> donde la utilizas en tu código.</li>
        <li>Los parámetros son como ingredientes que puedes pasar a una función para personalizar su acción.</li>

      </ul>

      <ButtonGroup 
        prev='/controlstructs' 
        next='/lists' 
        prevText="< Estructuras de control" 
        nextText="Listas >"/>
    </div>

    <ScrollToTop/>
    </>
  )
}
