import { ModulesList, ScrollToTop } from "../components"

export const WelcomePage = () => {
  return (
    <>
      <h1 className="d-flex justify-content-center mt-3">
        Bienvenido a Code Kids Play
      </h1>

      <p className="d-flex justify-content-center mt-4">
        En este portal tendras la posibilidad de aprender de manera simple teoría sobre programación basica y adentrarte
      </p>
      <p className="d-flex justify-content-center">
        más en el mundo del desarrollo de software con ejemplos simples y un ejercicio final muy divertido de realizar.
      </p>
      <p className="d-flex justify-content-center">
        ¡Entra, lo pasaras genial. Recuerda seguir las lecciones en orden y nunca parar de aprender!
      </p>

      <hr />

      <ModulesList />

      <ScrollToTop />
    </>
  )
}
