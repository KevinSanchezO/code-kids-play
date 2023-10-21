import { Route, Routes } from "react-router-dom"
import { AboutUsPage, 
    ControlStructsPage, 
    FAQPage, 
    FinalePage, 
    FunctionsPage, 
    IntroductionPage, 
    ListsPage, 
    OperationsPage, 
    VariablePage, 
    WelcomePage } from "../pages"

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<WelcomePage />}/>

            <Route path='introduction' element={<IntroductionPage />}/>
            
            <Route path='variables' element={<VariablePage />}/>

            <Route path='operations' element={<OperationsPage />}/>

            <Route path='controlstructs' element={<ControlStructsPage />}/>

            <Route path='functions' element={<FunctionsPage />}/> 

            <Route path='lists' element={<ListsPage />}/>

            <Route path='finale' element={<FinalePage />}/> 

            <Route path='faq' element={<FAQPage />}/>

            <Route path='sobre-nosotros' element={<AboutUsPage />}/>

            <Route path='/*' element={<WelcomePage />}/>
        </Routes>
    )
}
