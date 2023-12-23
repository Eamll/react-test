import TarjetasAprobadas from "./pages/TarjetasAprobadas";
import TarjetasSolicitadas from "./pages/TarjetasSolicitadas";
import SolicitudTarjetas from "./pages/SolicitudTarjetas"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@emotion/react";
import theme from "./config/theme";


function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SolicitudTarjetas />}></Route>
          <Route path='/tarjetas-solicitadas' element={<TarjetasSolicitadas />}></Route>
          <Route path='/tarjetas-aprobadas' element={<TarjetasAprobadas />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
