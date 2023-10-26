import { Navbar } from "./components"
import { AppRouter } from "./router/AppRouter"


export const CodeKidPlayApp = () => {
  return (
    <>

        <Navbar />
        <div className="container">
          <AppRouter />
        </div>
    </>
  )
}
