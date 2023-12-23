import Sidebar from '../components/Sidebar'
import { Box, Typography } from '@mui/material';

const TarjetasAprobadas = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
                    <Typography variant='h4'>TarjetasAprobadas</Typography>

                </Box>
            </Box>
        </>
    )
}

export default TarjetasAprobadas