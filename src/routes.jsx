import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";
import Page404 from "./pages/Page404";
import PageBase from "./pages/PageBase";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <PageBase /> } >
                    <Route index element={ <Home /> } />
                    <Route path="/sobre" element={ <Sobre /> } />
                    <Route path="/projetos" element={ <Projetos /> } />
                    <Route path="/contatos" element={ <Contatos /> } />
                    <Route path="*" element={ <Page404 /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
