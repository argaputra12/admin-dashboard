import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataInvoices } from '../../data/mockData';
import { useTheme } from '@mui/material';
import Header from '../../components/Header';


const Contact = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle="List of balances of each members" />
            <Box m="40px 0 0 0" height="75vh" sx={{ 
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                    fontSize: "14px",
                },
                "& .MultiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                    color: colors.greenAccent[300],
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
             }}>
                <DataGrid
                    checkboxSelection
                    rowHeight={55}
                    rows={mockDataInvoices}
                    columns={[
                        { field: 'id', headerName: 'ID' },
                        { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
                        { field: 'phone', headerName: 'Phone', flex: 1 },
                        { field: 'cost', headerName: 'Cost', type: 'number', headerAlign: 'left', align: 'left', flex: 0.5, renderCell: (params) => (
                            <Typography sx={{ color: colors.greenAccent[300] }}> 
                                {params.row.cost} €
                            </Typography>
                        )},
                        { field: 'email', headerName: 'Email', flex: 2 },
                        { field: 'date', headerName: 'Date', flex: 1 },
                    ]}
                    />
            </Box>
        </Box>
    )
}

export default Contact