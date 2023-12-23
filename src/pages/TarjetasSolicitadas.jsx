import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import Sidebar from '../components/Sidebar'
import TarjetaContext from '../context/TarjetaContext';
import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
const TarjetasSolicitadas = () => {
    const { tarjetas } = useContext(TarjetaContext);
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
                                <IconButton aria-label="delete">
                                    <CheckCircleIcon />
                                </IconButton><IconButton aria-label="delete">
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
