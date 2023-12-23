import { Box, Typography } from '@mui/material';
import Sidebar from '../components/Sidebar'
import TarjetaContext from '../context/TarjetaContext';
import { useContext } from 'react';
import { DataGrid, } from '@mui/x-data-grid';

const TarjetasAprobadas = () => {
    const { tarjetasAprobadas, setTarjetasAprobadas } = useContext(TarjetaContext);

    const columns = [
        { field: 'nombre', headerName: 'Nombre', width: 200 },
        { field: 'telefono', headerName: 'Telefono', width: 200 },
        { field: 'montoTarjetaAprobado', headerName: 'Monto Tarjeta Aprobado', width: 200, editable: true },
    ];

    const processRowUpdate = (params) => {
        const { nombre, montoTarjetaAprobado } = params;

        const newRows = tarjetasAprobadas.map((row) => {
            if (row.nombre === nombre) {
                return { ...row, ['montoTarjetaAprobado']: montoTarjetaAprobado };
            }
            return row;
        });
        setTarjetasAprobadas(newRows);
        return newRows;
    };

    const handleProcessRowUpdateError = (error) => {
        console.error(error);
    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "55px" }}>
                    <Typography variant='h4'>Tarjetas Aprobadas</Typography>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid rows={tarjetasAprobadas}
                            columns={columns} pageSize={5}
                            getRowId={(row) => row.nombre + row.documentoDeIdentidad}
                            processRowUpdate={processRowUpdate}
                            onProcessRowUpdateError={handleProcessRowUpdateError}
                        />
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default TarjetasAprobadas
