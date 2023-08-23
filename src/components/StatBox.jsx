import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProggresCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box width="100%" m="0 30px">
            <Box display="flex"
                justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography variant="h4" fontWeight="bold" sx={{ colors: colors.grey[100] }}>
                        {title}
                    </Typography>
                </Box>
                <Box>
                    <ProggresCircle progress={progress} />
                </Box>
            </Box>

            <Box display="flex" justifyContent="space-between" >
                <Typography variant="h5" sx={{ colors: colors.greenAccent[500] }}>
                    {subtitle}
                </Typography>
                <Typography variant="h5" fontWeight="italic" sx={{ colors: colors.greenAccent[600] }}>
                    {increase}
                </Typography>
            </Box>
        </Box>
        
    );
}

export default StatBox;