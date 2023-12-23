import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import TarjetaContext from '../context/TarjetaContext';

const TarjetasSolicitadas = () => {
    const { tarjetas, setTarjetas, setTarjetasAprobadas } = useContext(TarjetaContext);

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
                    <Typography variant='h4'>Tarjetas Solicitadas</Typography>
                    <List>
                        {tarjetas.map((tarjeta, index) => (
                            <ListItem key={index} disableGutters>
                                <ListItemText primary={'Cliente: ' + tarjeta.nombre} secondary={`Telefono: ${tarjeta.telefono}`} />
                                <IconButton aria-label="approve" onClick={() => {
                                    setTarjetas(prevTarjetas => prevTarjetas.filter(card => card !== tarjeta));
                                    setTarjetasAprobadas(prevTarjetas => [...prevTarjetas, tarjeta]);
                                }}>
                                    <CheckCircleIcon />
                                </IconButton>
                                <IconButton aria-label="disapprove" onClick={() => {
                                    setTarjetas(prevTarjetas => prevTarjetas.filter(card => card !== tarjeta));
                                }}>
                                    <ThumbDownIcon />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </>
    )
}

export default TarjetasSolicitadas
