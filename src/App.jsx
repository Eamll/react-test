import { ThemeProvider } from "@emotion/react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from "./config/theme";
import SolicitudTarjetas from "./pages/SolicitudTarjetas";
import TarjetasAprobadas from "./pages/TarjetasAprobadas";
import TarjetasSolicitadas from "./pages/TarjetasSolicitadas";
import TarjetaProvider from "./provider/TarjetaProvider";

function App() {

  return (
    <TarjetaProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SolicitudTarjetas />}></Route>
            <Route path='/tarjetas-solicitadas' element={<TarjetasSolicitadas />}></Route>
            <Route path='/tarjetas-aprobadas' element={<TarjetasAprobadas />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TarjetaProvider>
  )
}

export default App
