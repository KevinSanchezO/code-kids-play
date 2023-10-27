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
