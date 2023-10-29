import { useEffect } from "react";
import { ButtonGroup, ScrollToTop , ClipBoard } from "../../components";

export const ListsPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
      <div className="d-flex flex-column align-items-center mt-3 p-4 animate__animated animate__rubberBand">
      <h1>
        Listas
      </h1>

      <hr/>

      <h3>
      Introducción a las listas
      </h3>

      <p className="mt-2">
      ¡Hola! En este módulo, vamos a adentrarnos en el concepto de las listas en programación<br/>
      con el lenguaje Python. Las listas son como colecciones de elementos que te permiten<br/>
      almacenar y organizar datos de manera eficiente. 
      </p>

      <h3>
      Acceso a elementos de una lista
      </h3>

      <p className="mt-2">
      En una lista, cada elemento tiene una posición específica, llamada índice. Puedes acceder a<br/>
      los elementos de una lista utilizando estos índices.   
      </p>

      <p className="mt-2">
      Imagina que tu lista es como una serie de cajones numerados. Cada cajón tiene algo dentro<br/>
      y puedes acceder a ellos por su número iniciando por el 0.
      <ClipBoard codigo = 
      {
`frutas = ["manzana", "plátano", "uva", "naranja"]

primera_fruta = frutas[0]  # Esto es "manzana"
segunda_fruta = frutas[1]  # Esto es "plátano"`} />
      </p>

      <p className="mt-2">
      Claro, estos indices como valores positivos de 0 a 1 retorna los valores de derecha a izquiera<br/>
      pero también se pueden obtener los valores de derecha a izquierda con indices negativos
      <ClipBoard codigo = 
      {
`frutas = ["manzana", "plátano", "naranja"]

primera_fruta = frutas[-1]  # Esto es "naranja"
segunda_fruta = frutas[-2]  # Esto es "uva"`} />
      </p>

      <h3>Operaciones comunes en listas</h3>

      <p className="mt-2">
      Las listas son versátiles y te permiten realizar operaciones comunes, como agregar, eliminar <br/>
      y modificar elementos.  
      </p>

      <h5>Agregar elementos</h5>

      <p className="mt-2">
      Puedes agregar elementos al final de una lista usando el método "append()" al final de la lista.
      <ClipBoard codigo = 
      {
`colores = ["rojo", "verde"]
colores.append("azul")
# Ahora, colores contiene ["rojo", "verde", "azul"]
`}/> 
      </p>

      <h5>Eliminar elementos</h5>

      <p className="mt-2">
      Puedes eliminar elementos de una lista utilizando "del" que permite eliminar por indice o el <br/>
      método "remove()" que elimina por el valor.
      <ClipBoard codigo = 
      {
`frutas = ["manzana", "plátano", "uva", "naranja"]
del frutas[2]  # Esto elimina "uva"
numeros.remove("manzana")  # Esto elimina "manzana"
`}/>   
      </p>

      <p className="mt-2">
      Usando del, especificas el índice del elemento a eliminar. Con remove(), especificas el<br/>
      valor del elemento.   
      </p>

      <h5>Modificar elementos</h5>

      <p className="mt-2">
      Puedes cambiar el valor de un elemento en la lista simplemente asignándole un nuevo valor.  
      <ClipBoard codigo = 
      {
`dias_semana = ["lunes", "martes", "miércoles"]
dias_semana[0] = "domingo"
# Ahora, días_semana contiene ["domingo", "martes", "miércoles"]
`}/>  
      </p>

      <h3>Bucles y listas</h3>

      <p className="mt-2">
      Los bucles son excelentes para recorrer elementos en una lista y realizar acciones en cada<br/>
      uno de ellos. 
      </p>

      <h5>Bucles for</h5>

      <p className="mt-2">
      El bucle "for" te permite recorrer una lista y realizar acciones en cada elemento.
      <ClipBoard codigo = 
      {
`frutas = ["manzana", "plátano", "naranja"]

for fruta in frutas:
    print("Hoy tengo " + fruta)
`}/>    
      </p>

      <h5>Bucles while</h5>

      <p className="mt-2">
      También puedes usar el bucle "while" para recorrer una lista de manera controlada.
      <ClipBoard codigo = 
      {
`frutas = ["manzana", "plátano", "naranja"]
indice = 0

while indice < len(frutas):
    print("Hoy tengo " + frutas[indice])
    indice += 1
`}/>    
      </p>

      <h3>Resumen</h3>

      <ul>
        <li>Las listas son colecciones de elementos que te permiten almacenar y organizar datos.</li>
        <li>Puedes acceder a elementos de una lista utilizando índices.</li>
        <li>Las listas admiten operaciones comunes como agregar, eliminar y modificar elementos.</li>
        <li>Los bucles son herramientas poderosas para recorrer y trabajar con elementos de una lista.</li>
      </ul>

      <ButtonGroup 
      prev='/functions' 
      next='/finale' 
      prevText="< Funciones" 
      nextText="Trabajo final >"/>

      </div>
      
      <ScrollToTop/>
    </>
  )
}
