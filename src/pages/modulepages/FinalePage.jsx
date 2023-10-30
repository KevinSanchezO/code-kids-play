import { useEffect } from "react";
import { ButtonGroup, ScrollToTop } from "../../components";

export const FinalePage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  return (
    <>
    <div className="d-flex flex-column align-items-center mt-3 p-4 animate__animated animate__rubberBand">
    
    <h1>
      Trabajo final  
    </h1>  

    <hr/>

    <h3>
      Aventura de texto
    </h3>

    <p className="mt-2 narrow-paragraph">
    Bienvenidos a la emocionante sección final de nuestro curso de programación para niños. En esta 
    etapa, pondremos a prueba todos los conocimientos que has adquirido sobre programación y te desafiaremos
    a aplicarlos de una manera creativa y divertida. En "Crea tu Aventura de Texto," tendrás la oportunidad 
    de diseñar y programar tu propia historia interactiva.  
    </p>

    <h3>
    ¿Qué es una Aventura de Texto?
    </h3>

    <p className="mt-2 narrow-paragraph">
    Una aventura de texto es una historia interactiva en la que tú, como programador, tienes el control de la 
    trama. A través de decisiones y comandos que tú escribas, guiarás a los personajes a través de un mundo 
    imaginario lleno de sorpresas y desafíos.
    </p>

    <h3>
    Ideas para tu Aventura
    </h3>

    <p className="mt-2 narrow-paragraph">
    Para empezar, te ofrecemos algunas ideas de aventuras que puedes crear, pero no dudes en dejar volar tu 
    imaginación y diseñar tu propio mundo. Algunas ideas incluyen:
    </p>
    
    <ul>
      <li>Buscar un tesoro escondido en una isla misteriosa.</li>
      <li>Explorar el espacio en una nave espacial.</li>
      <li>Vivir una aventura mágica en un reino de fantasía.</li>
    </ul>

    <p className="mt-2 narrow-paragraph">
    Este proyecto final es tu oportunidad para ser un creador de historias y un programador. ¡Diviértete mientras aprendes y crea una aventura que puedas compartir con orgullo!
    </p>

    <ButtonGroup 
      prev='/lists' 
      next='/' 
      prevText="< Listas" 
      nextText="Seguir aprendiendo >"/>

    </div>

    <ScrollToTop/>

    </>
  )
}
