import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage } from "../pages/mainPage"
import { AboutPage } from "../pages/aboutPage"
import { LoginPage } from "../pages/loginPage"
import { RegisterPage } from "../pages/registerPage"

export const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}