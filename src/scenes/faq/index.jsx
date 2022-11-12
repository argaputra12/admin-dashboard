import { Box, Typography, useTheme, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Header from '../../components/Header';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../../theme";

const FAQ = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        What is the purpose of this website?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This website is a demo of the MUI theme generator. It is a tool that allows you to create a custom theme for your MUI project.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        What is the purpose of this website?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This website is a demo of the MUI theme generator. It is a tool that allows you to create a custom theme for your MUI project.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        What is the purpose of this website?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This website is a demo of the MUI theme generator. It is a tool that allows you to create a custom theme for your MUI project.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        What is the purpose of this website?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This website is a demo of the MUI theme generator. It is a tool that allows you to create a custom theme for your MUI project.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h4">
                        What is the purpose of this website?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This website is a demo of the MUI theme generator. It is a tool that allows you to create a custom theme for your MUI project.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
        </Box>
    )
}

export default FAQ;