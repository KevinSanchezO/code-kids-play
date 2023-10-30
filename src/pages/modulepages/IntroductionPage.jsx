import { useEffect } from "react";
import { ButtonGroup, ClipBoard, ScrollToTop } from "../../components"

export const IntroductionPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])


  return (
    <>
    <div className="d-flex flex-column align-items-center mt-3 p-4 animate__animated animate__rubberBand">

    <h1>¡Hola y Bienvenido al inicio de este recorrido!</h1>

    <hr/>

    <p className="mt-2 narrow-paragraph">
    Bienvenido a Code Kids Play! En este portal web podras aprender conceptos basicos de programación
    basados en el lenguaje de programación Python. Esperamos que al terminar el recorrido de los modulos
    o durante el mismo te intereses en el mundo de la programación, aprender conceptos más
    avanzados, aprender otros lenguajes de programación y mucho más. El mundo de la programación es
    muy variado y se encuentra en constante evolución. No necesitas mucho para iniciar, solo una
    computadora, conexión a internet y ganas de aprender. 
    </p>

    <h3>
    ¿Qué es la programación?  
    </h3>

    <p className="mt-2 narrow-paragraph">
    La programación es como darle instrucciones a una computadora o a un robot para que
    haga lo que queremos. Imagina que tienes un juguete muy especial, pero no sabe cómo
    funcionar solo. Para hacerlo divertido y útil, necesitas decirle qué hacer y cómo hacerlo. Eso
    es lo que hacemos con la programación.  
    </p>

    <p className="mt-2 narrow-paragraph">
    Piensa en la programación como una especie de lenguaje mágico que usamos para
    comunicarnos con las computadoras y hacer que hagan cosas interesantes. Usamos
    palabras especiales y ordenadas de una manera específica para decirle a la computadora
    qué tarea queremos que realice.  
    </p>

    <p className="mt-2 narrow-paragraph">
    La programación es como un juego de rompecabezas, donde debes pensar y planificar cada
    paso. Puedes crear juegos, aplicaciones, historias interactivas y muchas cosas más con la 
    programación. Es una forma muy creativa y poderosa de dar vida a tus ideas y hacer que las
    computadoras hagan cosas asombrosas. Así que, ¡puedes ser un mago de la programación
    y crear tus propias aventuras en el mundo digital!
    </p>

    <h3>¿Por qué es importante aprender a programar?</h3>

    <p className="mt-2 narrow-paragraph">
    Aprender a programar es como aprender un superpoder que te permite crear cosas sorprendentes 
    en la computadora. Es importante por varias razones:  
    </p>

    <h5>Creatividad</h5>

    <p className="mt-2 narrow-paragraph">
    La programación te permite dar vida a tus ideas. Puedes crear tus propios videojuegos, aplicaciones, historias interactivas y mucho más. ¡Imagina poder inventar cualquier cosa que puedas imaginar!
    </p>

    <h5>Resolución de problemas</h5>

    <p className="mt-2 narrow-paragraph">
    Programar te ayuda a convertir problemas en soluciones. Aprendes a dividir desafíos grandes en pasos pequeños y a encontrar respuestas lógicas. Es como resolver un misterio o un acertijo.  
    </p>

    <h5>Trabajo del futuro</h5>

    <p className="mt-2 narrow-paragraph">
    A medida que creces, la programación se vuelve una habilidad muy valiosa. Muchas empresas buscan personas que sepan programar porque la tecnología está en todas partes. Puedes trabajar en compañías geniales y hacer una diferencia en el mundo.
    </p>

    <p className="mt-2 narrow-paragraph">
    Entonces, aprender a programar es como aprender una habilidad mágica que te permite ser creativo, solucionar problemas, prepararte para el futuro y divertirte al mismo tiempo. ¡Es una forma asombrosa de explorar el mundo de la tecnología!  
    </p>

    <h3>Introducción a Python y su entorno de desarrollo.</h3>

    <p className="mt-2 narrow-paragraph">
    Python es uno de los lenguajes de programación más sencillos y versatiles que existen. Con este es posible desde crear programas sencillos
    hasta desarrollar inteligencias artificiales complejas con posibilidades infinitas. Para comenzar a usarlo solo debes dirigirte al 
    <a href="https://www.python.org/downloads/"> sitio oficial de descarga</a>. Una vez dentro solo debes presionar el boton amarillo de descarga y 
    comenzara a descargar lo necesario para instalar python en tu computadora.
    </p>

    <img src="./PythonPage.png" alt="Pagina de descarga" className="max-width-image"/>

    <p className="mt-2 narrow-paragraph">
    Una vez se finalice la descarga tendras en tu computadora un archivo similar 
    al que se presenta en la siguiente imagen.
    </p>

    <img src="./PythonExe.png" alt="Instalador" className="max-width-image"/>

    <p className="mt-2 narrow-paragraph">
    Al iniciarlo se te mostrara una ventana con los pasos para la instalación.
    Procura tener seleccionada la opción en la parte inferior de {`"Add python.exe to PATH" `}
    y presiona la opción de "Install Now"
    </p>

    <img src="./PythonInstall.png" alt="Ventana de instalación" className="max-width-image"/>

    <p className="mt-2 narrow-paragraph">
    Una vez finalizada la instalación tendras todo lo necesario para poder ejecutar
    codigo Python, ahora solo necesitamos algo para escribirlo. Por suerte, Python
    ya trae consigo un IDLE, un programa que permite escribir y ejecutar codigo pero
    unicamente de Python, esta no es la unica, existen muchas otras como la tan conocida
    <a href="https://code.visualstudio.com/"> Visual Studio Code</a> que permite
    escribir codigo de cualquier lenguaje de programacion con la configuración 
    necesaria, son decisiones y eres totalmente libre de explorar y experimentar.
    ¡Esa es la base de la programación!<br/>Si deseas seguir con el IDLE de Python
    solo deberas escribir en el buscador de tu computadora "IDLE" y presionar la opción
    algo similar a esta
    </p>  

    <img src="./PythonIDLE.png" alt="IDLE opción" className="max-width-image"/>

    <p className="mt-2 narrow-paragraph">
    Al presionarla se te abrira el Shell del IDLE que es el espacio donde se ejecutara
    el codigo que escribas en un archivo de codigo. Antes, probemos que todo este en orden.
    Escribe el siguiente codigo en el Shell y presiona "ENTER"
    <ClipBoard codigo = 
      {
`print("Hola mundo")`        
      }/>      
    </p>

    <p className="mt-2 narrow-paragraph">
    En pantalla se mostrara debajo de donde escribiste el codigo la palabra "Hola Mundo".
    ¡Felicidades! acabas de escribir tu primer codigo Python. Ahora que todo esta en orden
    podemos seguir creando tu primer archivo de codigo Python. Presiona la tecla "CTRL" o "Control"
    y la tecla "N" a la vez, esto abrira una nueva ventana con el titulo "untitled". Ahora guardemoslo,
    presiona la combinación "CTRL" y la tecla "S" y guarda el archivo de codigo donde sea con el nombre
    que más te apetezca, en mi caso le pondre el nombre "main". Ahora repitamos el anterior proceso,
    vuelve a escribir el anterior codigo pero ahora en tu archivo de codigo, guardalo con "CTRL" + "S"
    y presiona F5 para ejecutarlo. Veras como en el Shell se muestra "Hola mundo".
    Recuerda, siempre antes de ejecutar un codigo debes guardarlo para que se ejecute tu codigo más actual.
    </p>

    <p className="mt-2 narrow-paragraph">
    Algo peculiar e importante de Python es que es un lenguaje "Identation sensitive" o sensible a identaciones
    que son los espacios a la izquierda de un texto para explicarle al codigo que es parte de otro sección, aquí un ejemplo:
    <ClipBoard codigo = 
      {
`variable = 1 #esta variable es glogal no es parte de nadie

def funcion():
    variable2 = 2 #esta variable es parte de la funcion
    if variable2 == 2:
        variable2 = 4 #esta modificacion es del if y la funcion
    return variable2 #esta linea es parte de la funcion

print(funcion + variable) #esta linea es global no es parte de nadie  
`     
      }/>  
    </p>

    <p className="mt-2 narrow-paragraph">
    Mientras avances aprendiendo te acostumbraras a este comportamiento de Python.
    </p>

    <p className="mt-2 narrow-paragraph">
    ¡Listo! ya tienes tu entorno para desarrollar en Python completo, puedes seguir con las
    siguientes secciones sin problemas escribiendo los codigos ejemplo y
    preferiblemente creando un archivo para cada seccion. ¡Vamos, siganme los buenos!
    </p>

    <ButtonGroup 
      prev='/' 
      next='/variables' 
      prevText="< Modulos" 
      nextText="Variables >"/>
    </div>

    <ScrollToTop/>
    </>
  )
}
