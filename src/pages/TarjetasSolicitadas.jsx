import { Box, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar'

const TarjetasSolicitadas = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
                    <Typography variant='h4'>TarjetasSolicitadas</Typography>

                </Box>
            </Box>
        </>
    )
}

export default TarjetasSolicitadas