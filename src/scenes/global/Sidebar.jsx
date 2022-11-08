import { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme} from "@mui/material";
import { Link } from 'react-router-dom';
import { tokens } from "../../theme";

import { HomeOutlined, PeopleOutlined, ContactsOutlined, ReceiptOutlined, PersonOutlined, CalendarTodayOutlined, HelpOutlined, BarChartOutlined, PieChartOutlined, TimelineOutlined, MenuOutlined, MapOutlined } from '@mui/icons-material'

const Item = ({title, to, icon, selected, setSelected}) =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )

}

const Sidebar = () =>{

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('dashboard');

    return (
        <Box
            
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                  },
                  "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                  },
                  "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                  },
                  "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                  },
                  "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                  },
            }}
        >
            <ProSidebar
                collapsed={isCollapsed}
            >
                {/* Logo and Menu icon */}
                <Menu iconShape='square'>
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlined/> : undefined}
                        style={{ 
                            margin: "5px 0 20px 0",
                            color: colors.grey[100],
                        }}
                        >
                        {!isCollapsed && (
                            <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                            >
                                <Typography 
                                    variant="h3" 
                                    style={{ 
                                        color: colors.grey[100] ,
                                    }}
                                    >
                                    ADMINS
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlined/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* USER */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="user-profile"
                                    width='100px'
                                    height='100px'
                                    src="https://www.shutterstock.com/shutterstock/photos/404138239/display_1500/stock-vector-profile-picture-vector-404138239.jpg"
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                    />
                            </Box>

                            <Box textAlign="center">
                                <Typography 
                                    variant='h2' 
                                    color={colors.grey[100]} 
                                    fontWeight="bold" 
                                    sx={{ m:"10px 0 0  0" }}
                                    >
                                    John Doe
                                </Typography>
                                <Typography
                                    variant='h5'
                                    color={colors.greenAccent[500]}
                                    >
                                    VP hoho hihe
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu Items*/}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Manage Team"
                            to="/teams"
                            icon={<PeopleOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Contacts Information"
                            to="/contacts"
                            icon={<ContactsOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Invoices"
                            to="/invoices"
                            icon={<ReceiptOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Profile"
                            to="/form"
                            icon={<PersonOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="FAQ Page"
                            to={"/faq"}
                            icon={<HelpOutlined/>}
                            selected={selected}
                            setSelected={setSelected}   
                        />
                        <Item
                            title={"Bar Charts"}
                            to={"/charts/bar"}
                            icon={<BarChartOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={"Pie Charts"}
                            to={"/charts/pie"}
                            icon={<PieChartOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={"Line Charts"}
                            to={"/charts/line"}
                            icon={<TimelineOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={"Geography Charts"}
                            to={"/charts/geography"}
                            icon={<MapOutlined/>}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )

}

export default Sidebar