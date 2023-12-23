import { Box, Typography, TextField, Grid, Button } from '@mui/material';
import Sidebar from '../components/Sidebar';

const SolicitudTarjetas = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
                    <Typography variant='h4' sx={{ marginBottom: '25px' }}>SolicitudTarjetas</Typography>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <TextField id="nombre" label="Nombre" variant="outlined" />
                        </Grid>
                        <Grid item>
                            <TextField id="documento-de-identidad" label="Documento de Identidad" variant="outlined" />
                        </Grid>
                        <Grid item>
                            <TextField id="correo-electronico" label="Correo Electrónico" variant="outlined" />
                        </Grid>
                        <Grid item>
                            <TextField id="telefono" label="Teléfono" variant="outlined" />
                        </Grid>

                        <Grid item>
                            <Button variant="contained" >
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