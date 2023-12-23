import { Box, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar'

const SolicitudTarjetas = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
                    <Typography variant='h4'>SolicitudTarjetas</Typography>

                </Box>
            </Box>
        </>
    )
}

export default SolicitudTarjetas