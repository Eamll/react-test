import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import TarjetaContext from '../context/TarjetaContext';

const SolicitudTarjetas = () => {
    const { tarjetaState, setTarjetaState, addTarjeta } = useContext(TarjetaContext);

    const handleInputChange = (event) => {
        setTarjetaState({
            ...tarjetaState,
            [event.target.id]: event.target.value
        });
    };

    const handleSolicitud = () => {
        addTarjeta(tarjetaState);
    };
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
                    <Typography variant='h4' sx={{ marginBottom: '25px' }}>Solicitud Tarjetas</Typography>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <TextField id="nombre" label="Nombre" variant="outlined" value={tarjetaState.nombre} onChange={handleInputChange} />
                        </Grid>
                        <Grid item>
                            <TextField id="documentoDeIdentidad" label="Documento de Identidad" variant="outlined" value={tarjetaState.documentoDeIdentidad} onChange={handleInputChange} />
                        </Grid>
                        <Grid item>
                            <TextField id="correoElectronico" label="Correo Electrónico" variant="outlined" value={tarjetaState.correoElectronico} onChange={handleInputChange} />
                        </Grid>
                        <Grid item>
                            <TextField id="telefono" label="Teléfono" variant="outlined" value={tarjetaState.telefono} onChange={handleInputChange} />
                        </Grid>

                        <Grid item>
                            <Button variant="contained" onClick={handleSolicitud}>
                                Solicitar
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default SolicitudTarjetas;
