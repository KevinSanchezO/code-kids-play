
import { useEffect } from "react";
import {ScrollToTop } from "../components";

export const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
    <div className="d-flex flex-column align-items-center mt-3 p-4 animate__animated animate__rubberBand">
      <h3>
      Sobre Nosotros.
      </h3>

      <p className="mt-2 narrow-paragraph">
      ¡Saludos! Somos Kevin Lanzas Quen y Kevin Sanchez Obando, dos entusiastas estudiantes del Tecnológico de Costa Rica con una pasión compartida por la programación y la educación.<br/><br/>

Nuestro proyecto nació de la convicción de que el aprendizaje de la programación desde una edad temprana es fundamental en el mundo actual. Buscamos fomentar el desarrollo de habilidades en niños a través de una plataforma interactiva y accesible.<br/><br/>

En nuestro recorrido académico, hemos encontrado un vacío en la enseñanza de conceptos de programación para los más jóvenes. Es por eso que creamos este espacio educativo en línea. Nuestro enfoque se centra en enseñar las bases de la programación utilizando Python, un lenguaje versátil y poderoso, adaptado de una manera amigable y divertida para los niños.<br/><br/>

Nuestra meta es facilitar un ambiente dinámico y atractivo que inspire a los niños a explorar el mundo de la programación. Creemos firmemente que aprender a codificar no solo impulsa el pensamiento lógico y la resolución de problemas, sino que también estimula la creatividad y la innovación desde una edad temprana.<br/><br/>

Estamos comprometidos a proporcionar un recurso educativo de calidad que sea fácilmente accesible para padres, maestros y, sobre todo, para los pequeños entusiastas de la tecnología.<br/><br/>

¡Únete a nosotros en este emocionante viaje para sembrar las semillas del conocimiento tecnológico en las mentes jóvenes y prepararlas para un futuro innovador!<br/><br/>

Siéntete libre de explorar nuestra plataforma y únete a la aventura de aprender a programar en Python de una manera divertida y educativa.<br/><br/>

¡Gracias por ser parte de este viaje!<br/><br/>

¡A programar juntos!<br/><br/>

Kevin Lanzas Quen<br/><br/> LinkedIn: https://www.linkedin.com/in/kevin-lanzas-quen-139828272/  <br/><br/>
Kevin Sanchez Obando<br/><br/> LinkedIn: https://www.linkedin.com/in/kevin-s%C3%A1nchez-obando/<br/><br/>
      </p>
    </div>
    <ScrollToTop/>
    </>
  )
}
