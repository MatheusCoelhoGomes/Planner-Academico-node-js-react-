import React from "react"
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'

import NavBar from "./components/NavBar/NavBar.jsx"
import NotasPage from "./pages/NotasPage.jsx"
import DesempenhoPage from "./pages/DesempenhoPage.jsx"
import AgendaPage from "./pages/AgendaPage.jsx"

const Layout = () => {
    return (
        <div className="container">
            <NavBar />
            <Outlet />
        </div>
    );
};



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                  path: '/Notas',
                element: <NotasPage />,
            },
            {
                path: '/Desempenho',
                element: <DesempenhoPage />
            },
            {
                path: '/Agenda',
                element: <AgendaPage />
            }
        ]
    }
]);


function App() {
    return(
        <div className="conteiner">
            <RouterProvider router={router}/>
        </div>
    )   
}

export default App