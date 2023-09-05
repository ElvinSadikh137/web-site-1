import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ServerError = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box color={colors.grey[200]} display="flex" flexDirection="column" alignItems="center" marginTop="250px" height="100vh" >
            <h1>Something went wrong!</h1>
            <Box color={colors.grey[300]}>
                <h2>Server Error 500</h2>
            </Box>
        </Box>

    )
}

export default ServerError;