import { ModulesList } from "../components"

export const WelcomePage = () => {
  return (
    <>
      <h1 className="d-flex justify-content-center mt-3">
        Bienvenido a Code Kids Play
      </h1>

      <p className="d-flex justify-content-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida vehicula ornare. Etiam euismod varius eleifend. Proin id nisi elit. <br />
        Duis tincidunt consectetur dignissim. Aliquam finibus dictum porttitor. Ut vel tincidunt nulla. Proin a auctor sapien. <br />
        Curabitur eget malesuada risus. Sed vel ornare nibh. Sed ultrices sed diam non dictum. Curabitur venenatis magna sit amet commodo dignissim. <br />
      </p>

      <hr />

      <ModulesList />
    </>
  )
}
