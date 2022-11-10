import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
import Header from '../../components/Header';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing your team members" />
            <Box m="40px 0 0 0" height="75vh">
                <DataGrid
                    rows={mockDataTeam}
                    columns={[
                        { field: 'id', headerName: 'ID' },
                        { field: 'name', headerName: 'Name', flex: 1, cellClassName: "name-column--cell", headerAlign: 'center' },
                        { field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', align: 'left' },
                        { field: 'phone', headerName: 'Phone Number', flex: 1 },
                        { field: 'email', headerName: 'Email', flex: 1 },
                        { field: 'access', headerName: 'Role', flex: 1, headerAlign: 'center', renderCell:({row: {access}}) => {
                            return(
                                <Box
                                    width="60%"
                                    m="0 auto"
                                    p="5px"
                                    display="flex"
                                    justifyContent="center"
                                    backgroundColor={access === "Admin" ? colors.greenAccent[600] : colors.greenAccent[700]}
                                    borderRadius="4px"
                                >
                                    {access === "admin" && <AdminPanelSettingsOutlined/>}
                                    {access === "user" && <LockOpenOutlined/>}
                                    {access === "manager" && <SecurityOutlined/>}
                                    <Typography colors={colors.grey[100]} >
                                        {access}
                                    </Typography>
                                </Box>
                            )
                        }},
                    ]}
                    />
            </Box>
        </Box>
    )
}

export default Team