import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData';
import { useTheme } from '@mui/material';
import Header from '../../components/Header';


const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of contacts from members" />
            <Box m="40px 0 0 0" height="75vh" sx={{ 
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
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
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                },
             }}>
                <DataGrid
                    rowHeight={55}
                    rows={mockDataTeam}
                    columns={[
                        { field: 'id', headerName: 'ID' },
                        { field: 'name', headerName: 'Name', flex: 0.5,cellClassName: "name-column--cell", headerAlign: 'center' },
                        { field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left' },
                        { field: 'phone', headerName: 'Phone Number', flex: 1 },
                        { field: 'email', headerName: 'Email', flex: 1 },
                        { field: 'address', headerName: 'Address', flex: 1 },
                        { field: 'zipcode', headerName: 'Zip Code', flex: 1 },
                        { field: 'access', headerName: 'Role', flex: 1, headerAlign: 'center' },
                    ]}
                    />
            </Box>
        </Box>
    )
}

export default Team