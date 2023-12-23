import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import Sidebar from '../components/Sidebar'
import TarjetaContext from '../context/TarjetaContext';
import { useContext } from 'react';

const TarjetasAprobadas = () => {
    const { tarjetasAprobadas } = useContext(TarjetaContext);
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
                    <Typography variant='h4'>Tarjetas Aprobadas</Typography>
                    <List>
                        {tarjetasAprobadas.map((tarjeta, index) => (
                            <ListItem key={index} disableGutters>
                                <ListItemText primary={'Cliente: ' + tarjeta.nombre} secondary={`Telefono: ${tarjeta.telefono}`} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </>
    )
}

export default TarjetasAprobadas
