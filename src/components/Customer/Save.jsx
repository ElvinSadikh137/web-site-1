import { Box, Dialog, useTheme, DialogTitle, DialogContent, TextField, Button, FormControlLabel, Radio } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import * as yup from "yup";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../../theme";
import axios from "axios";

const SaveCustomer = ({ isOpen, onClose }) => {
    const phoneRegExp = /^(?:994)(50|51|55|60|70|77|99|10)(\d{7})$/;

    const theme1 = useTheme();
    const colors = tokens(theme1.palette.mode);

    const isNonMobile = useMediaQuery("(min-width:600px)");

    const makePost = async (values) => {
        try {
            const response = await axios.post('http://localhost:8080/customers/addCustomer', values);
            console.log(values);
            console.log("Post response:", response.data);
            onClose();
        } catch (error) {
            console.error("Error posting data:", error);
        }
    }
    return (
        <Dialog open={isOpen} >
            <DialogTitle sx={{ backgroundColor: colors.greenAccent[700], color: colors.white[100] }}>Add New Customer <CloseIcon sx={{ marginLeft: "390px" }} onClick={onClose} /></DialogTitle>
            <DialogContent sx={{ backgroundColor: colors.black[800], color: colors.black[100] }}>
                <Formik
                    initialValues={{
                        name: "",
                        type: "",
                        phoneNumber: "",
                        contactPerson: "",
                        active: "",
                        balance: "",
                    }}
                    validationSchema={
                        yup.object().shape({
                            name: yup.string().required("Cannot be empty"),
                            phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Cannot be empty"),
                            contactPerson: yup.string().required("Cannot be empty"),
                            balance: yup.string().required("Cannot be empty"),
                            type: yup.string().required("Cannot be empty"),
                            active: yup.string().required("Cannot be empty"),
                        })
                    }
                    onSubmit={(values, { resetForm, setSubmitting, setFieldValue }) => {
                        makePost(values);
                        resetForm();
                        setSubmitting(false);


                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleSubmit,
                        handleBlur,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Box
                                display="grid"
                                gap="20px"
                                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                sx={{
                                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                }}
                            >
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    name="name"
                                    sx={{ gridColumn: "span 4", marginTop: "15px" }}
                                    error={!!touched.name && !!errors.name}
                                    helperText={touched.name && errors.name}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Type"
                                    value={values.type}
                                    name="type"
                                    sx={{ gridColumn: "span 2" }}
                                    disabled
                                />
                                <FormControlLabel
                                    value="Customer"
                                    control={<Radio />}
                                    label="Customer"
                                    onChange={handleChange}
                                    checked={values.type === 'Customer'}
                                    name="type"
                                />
                                <FormControlLabel
                                    value="Reseller"
                                    control={<Radio />}
                                    label="Reseller"
                                    onChange={handleChange}
                                    checked={values.type === 'Reseller'}
                                    name="type"
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    sx={{
                                        gridColumn: "span 4", "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button": {
                                            display: "none",
                                        },
                                    }}
                                    type="number"
                                    label="Phone Number"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phoneNumber}
                                    error={!!touched.phoneNumber && !!errors.phoneNumber}
                                    helperText={touched.phoneNumber && errors.phoneNumber}
                                    name="phoneNumber"
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Contact Persone"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.contactPerson}
                                    name="contactPerson"
                                    sx={{ gridColumn: "span 4" }}
                                    error={!!touched.contactPerson && !!errors.contactPerson}
                                    helperText={touched.contactPerson && errors.contactPerson}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="number"
                                    label="Balance"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.balance}
                                    name="balance"
                                    sx={{
                                        "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button": {
                                            display: "none",
                                        },
                                        gridColumn: "span 4",
                                    }}
                                    error={!!touched.balance && !!errors.balance}
                                    helperText={touched.balance && errors.balance}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Active"
                                    onChange={handleChange}
                                    value={values.active}
                                    name="active"
                                    sx={{ gridColumn: "span 2", }}
                                    disabled
                                />

                                <FormControlLabel
                                    value="Active"
                                    control={<Radio />}
                                    label="Active"
                                    onChange={handleChange}
                                    checked={values.active === 'Active'}
                                    name="active"
                                />
                                <FormControlLabel
                                    value="Deactive"
                                    control={<Radio />}
                                    label="Deactive"
                                    onChange={handleChange}
                                    checked={values.active === 'Deactive'}
                                    name="active"
                                />
                            </Box>
                            <Box display="flex" justifyContent="center" mt="20px">
                                <Button type="submit" color="createButone" sx={{ color: colors.white[100] }} variant="contained" disabled={isSubmitting || !dirty}>
                                    Create New Customer
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    )
}
export default SaveCustomer;