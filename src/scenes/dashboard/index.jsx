import Header from "../../components/Header"
import { Typography, Box, useTheme } from "@mui/material";

const Dashboard = () =>{
    return (
        <Box m="20px">
            <Box
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "left",
                }}
            >
                <Header title="DASHBOARD" subtitle="This is the dashboard page"/>
            </Box>
        </Box>
    );
};

export default Dashboard