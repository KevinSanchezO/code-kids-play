import { Route, Routes } from "react-router-dom"
import { AboutUsPage, FAQPage, IntroductionPage, WelcomePage } from "../pages"

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<WelcomePage />}/>

            <Route path='introduction' element={<IntroductionPage />}/>

            <Route path='faq' element={<FAQPage />}/>

            <Route path='sobre-nosotros' element={<AboutUsPage />}/>

            <Route path='/*' element={<WelcomePage />}/>
        </Routes>
    )
}
