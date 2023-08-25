import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        < Header title="FAQ" subtitle="Frequently Asked Question Page" />
        {/* Question 1 */}
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An importan question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Incidunt est sunt laudantium magnam soluta aspernatur minus odio sit beatae ipsam, recusandae 
                    dolores commodi! Cum labore debitis at commodi repudiandae rerum.
                </Typography>
            </AccordionDetails>
        </Accordion>
        {/* Question 2 */}
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Another importan question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Harum dolorem, asperiores
                    rerum ad explicabo in tenetur ullam vitae 
                    architecto perferendis nihil esse perspiciatis sed aspernatur minus,
                     ipsum odit nostrum. Ipsum.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box >

}
export default FAQ;

