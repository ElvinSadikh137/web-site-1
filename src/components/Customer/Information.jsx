import { Box, Dialog, useTheme, DialogTitle, DialogContent, Typography, Card } from "@mui/material";
import { tokens } from "../../theme";
import CloseIcon from '@mui/icons-material/Close';

const Information = ({ data, isOpen, onClose }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const customerInfo = data;
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Dialog open={isOpen} sx={{"& .MuiDialogContent-root":{backgroundColor:"#DBDBDB"}}}>
                <DialogTitle sx={{ backgroundColor: colors.greenAccent[700], color: colors.white[100], fontSize: "18px" }}>Customer Information <CloseIcon sx={{ marginLeft: "340px" }} onClick={onClose} /></DialogTitle><DialogContent sx={{ backgroundColor: colors.grey[600] }}>
                    <br />
                    {customerInfo && (
                        <Box>
                            <Box display="flex" justifyContent="space-between" alignItems="center" >
                                <Card sx={{ width: "150px", borderRadius: "10px", backgroundColor: "#F3F2ED" }}>
                                    <Typography sx={{ padding: "8px 10px", textAlign: "center", color: "#121212", fontSize: "15px", fontFamily:"sans-serif", fontWeight:"bold" }}>
                                        ID
                                        <hr />
                                        <Typography sx={{ fontSize: "15px" }}>
                                            {customerInfo.id}
                                        </Typography>
                                    </Typography>
                                </Card>
                                <Card sx={{ width: "150px", borderRadius: "10px", backgroundColor: "#F3F2ED" }}>
                                    <Box>
                                        <Typography sx={{ padding: "8px 10px", textAlign: "center", color: "#121212", fontSize: "15px", fontFamily:"sans-serif", fontWeight:"bold" }}>
                                            Name
                                            <hr />
                                            <Typography sx={{ fontSize: "15px" }}>
                                                {customerInfo.name}
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Card>
                                <Card sx={{ width: "150px", borderRadius: "10px", backgroundColor: "#F3F2ED" }}>
                                    <Box>
                                        <Typography sx={{ padding: "8px 10px", textAlign: "center", color: "#121212", fontSize: "15px", fontFamily:"sans-serif", fontWeight:"bold"}}>
                                            Type
                                            <hr />
                                            <Typography sx={{ fontSize: "15px" }}>
                                                {customerInfo.type}
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Card>
                            </Box>
                            <br />
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Card sx={{ width: "150px", borderRadius: "10px", backgroundColor: "#F3F2ED"}}>
                                    <Box>
                                        <Typography sx={{ padding: "8px 10px", textAlign: "center",color: "#121212", fontSize: "15px", fontFamily:"sans-serif", fontWeight:"bold" }}>
                                            Phone Number
                                            <hr />
                                            <Typography sx={{ fontSize: "15px" }}>
                                                {customerInfo.phoneNumber}
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Card>
                                <Card sx={{ width: "150px", borderRadius: "10px", backgroundColor: "#F3F2ED"}}>
                                    <Box>
                                        <Typography sx={{ padding: "8px 10px", textAlign: "center", color: "#121212", fontSize: "15px", fontFamily:"sans-serif", fontWeight:"bold" }}>
                                            Contact Person
                                            <hr />
                                            <Typography sx={{ fontSize: "15px" }}>
                                                {customerInfo.contactPerson}
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Card>
                                <Card sx={{ width: "150px", borderRadius: "10px", backgroundColor: "#F3F2ED"}}>
                                    <Box>
                                        <Typography sx={{ padding: "8px 10px", textAlign: "center", color: "#121212", fontSize: "15px", fontFamily:"sans-serif", fontWeight:"bold" }}>
                                            Active Status
                                            <hr />
                                            <Typography sx={{ fontSize: "15px" }}>
                                                {customerInfo.activeStatus}
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Card>
                            </Box>
                            <br />
                            <Card sx={{ width: "550px", borderRadius: "10px", backgroundColor: "#F3F2ED"}}>
                                <Box>
                                    <Typography sx={{ padding: "8px 10px", textAlign: "center", color: "#121212", fontSize: "15px", fontFamily:"sans-serif", fontWeight:"bold" }}>
                                        Balance
                                        <hr />
                                        <Typography sx={{ fontSize: "15px" }}>
                                            {customerInfo.balance}
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Card>

                        </Box>
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    )

}

export default Information; 