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

    <p className="mt-2">
      
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
