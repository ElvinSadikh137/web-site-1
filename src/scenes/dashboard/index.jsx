import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AlarmOffOutlinedIcon from '@mui/icons-material/AlarmOffOutlined';
import PhoneDisabledOutlinedIcon from '@mui/icons-material/PhoneDisabledOutlined';
import SettingsPhoneOutlinedIcon from '@mui/icons-material/SettingsPhoneOutlined';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StateBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m="20px" sx={{
            "& ::-webkit-scrollbar-thumb": {
                backgroundColor: "#6870fa",
                borderRadius: "4px",

            },
            "& ::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
            },
            "& ::-webkit-scrollbar": {
                width: "5px",
                height: "5px"
            }
        }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px"

                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px", }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>
            <br />
            {/* GRID & CHARTS */}
            <Box display="grid"
                gridTemplateColumns="repeat(12,1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW  1*/}
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StateBox title="12,361" subtitle="REQUESTS" progress="0.75" increase="+14%" icon={<PhoneForwardedOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} />
                </Box>

                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StateBox title="431,225" subtitle="PROCESSED" progress="0.5" increase="+21%" icon={<SettingsPhoneOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} />
                </Box>

                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StateBox title="32,441" subtitle="FAILED" progress="0.30" increase="+5%" icon={<PhoneDisabledOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} />
                </Box>

                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StateBox title="1,745,137" subtitle="EXPIRED" progress="0.80" increase="+43%" icon={<AlarmOffOutlinedIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />} />
                </Box>


                {/* ROW 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}>
                    <Box
                        mt="25px"
                        padding="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                                Customers with low balance
                            </Typography>
                            <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                                lower than 10₼
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{
                                        fontSize: "26px",
                                        color: colors.greenAccent[500],

                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />

                    </Box>
                </Box>
                {/* TRANSACTIONS */}
                <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto" >
                    <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]} p="15px" >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">Overloaded gateways</Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">{transaction.txId}</Typography>
                                <Typography color={colors.grey[100]} >{transaction.user}</Typography>

                            </Box>
                            <Box color={colors.grey[100]}>
                                {transaction.date}
                            </Box>
                            <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>
                {/* ROW 3 */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px">
                    <Typography variant="h5" fontWeight="600">
                        Campaing
                    </Typography>
                    <Box
                        display="flex" flexDirection="column" alignItems="center" mt="25px">
                        <ProgressCircle size="125" />
                        <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }} >
                            $745,137 revenue generated
                        </Typography>
                        <Typography>Includes extra misc expenditures and costs</Typography>
                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Typography variant="h5" fontWeight="600" sx={{ p: "30px 30px 0 30px" }}>
                        Sales Quantity
                    </Typography>
                    <Box height="250px" mt="-20px">
                        <LineChart isDashboard={true} />

                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
                        Geography Based Traffic
                    </Typography>
                    <Box height="200px" >
                        <GeographyChart isDashboard={true} />
                    </Box>
                </Box>
                {/*  */}
            </Box>
        </Box>
    );
};
export default Dashboard;