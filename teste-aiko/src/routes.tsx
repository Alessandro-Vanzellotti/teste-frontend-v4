
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./pages/Map/Map";
import Trucks from "./pages/Trucks/Trucks";
import MainPage from "./pages/MainPage/MainPage";

export default function Router() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route path='/trucks' element={<Trucks />} />
          <Route path='/map' element={<Map/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

//<Route path='/categoria/:nomeCategoria' element={<Categoria />} />