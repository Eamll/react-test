import PropTypes from "prop-types"
import { useState } from 'react';
import TarjetaContext from "../context/TarjetaContext";

const TarjetaProvider = ({ children }) => {
    const [tarjetaState, setTarjetaState] = useState({
        nombre: '',
        documentoDeIdentidad: '',
        correoElectronico: '',
        telefono: '',
        montoTarjetaAprobado: 0,
    });

    const [tarjetas, setTarjetas] = useState([]);

    const addTarjeta = tarjeta => {
        setTarjetas([...tarjetas, tarjeta]);
    };

    return (
        <TarjetaContext.Provider value={{ tarjetaState, setTarjetaState, tarjetas, addTarjeta }}>
            {children}
        </TarjetaContext.Provider>
    );
};

TarjetaProvider.propTypes = {
    children: PropTypes.any
}

export default TarjetaProvider;
