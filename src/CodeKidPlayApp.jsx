import { Route, Routes } from "react-router-dom"
import { IntroductionPage } from "./pages/IntroductionPage"
import { WelcomePage } from "./pages/WelcomePage"

export const CodeKidPlayApp = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<WelcomePage />}/>

            <Route path='introduction' element={<IntroductionPage />}/>

            <Route path='/*' element={<WelcomePage />}/>
        </Routes>
    </>
  )
}
