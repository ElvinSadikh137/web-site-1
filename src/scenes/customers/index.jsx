import { Box, Dialog, useTheme, DialogTitle, DialogContent, TextField, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PageviewIcon from '@mui/icons-material/Pageview';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CloseIcon from '@mui/icons-material/Close';
import * as yup from "yup";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";

const Customers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddModalOpen = () => {
    setIsAddModalOpen(true);
  };
  const handleAddModalClose = () => {
    setIsAddModalOpen(false);
  };


  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/customers/customersInfo")
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  const viewCustomer = (customer) => {
    // Görüntüleme işlemleri için yapılacaklar
  };

  const updateCustomer = (customer) => {
    // Güncelleme işlemleri için yapılacaklar
  };

  const deleteCustomer = (customer) => {
    // Silme işlemleri için yapılacaklar
  };


  const columns = [
    {
      field: "id",
      headerName: "#"
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "type",
      headerName: "Type",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "contactPerson",
      headerName: "Contact Person",
      flex: 1,
    },
    {
      field: "reseller",
      headerName: "Reseller",
      flex: 1,
    },
    {
      field: "activeStatus",
      headerName: "Active",
      flex: 1,
    },
    {
      field: "balance",
      headerName: "Balance",
      flex: 0.5,
    },
    {
      field: "actions", // Düğme sütununun adı
      headerName: "Actions", // Sütun başlığı
      flex: 1,
      renderCell: (params) => (
        <div>
          <Button sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "5px",
            borderRadius: "24px"
          }} onClick={() => viewCustomer(params.row)}><PageviewIcon style={{ fontSize: "24px" }} /></Button>

          <Button sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "5px",
            borderRadius: "24px"
          }} onClick={() => updateCustomer(params.row)}><DriveFileRenameOutlineIcon style={{ fontSize: "24px" }} /></Button>
          <Button sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "5px",
            borderRadius: "24px"
          }}
            onClick={() => deleteCustomer(params.row)}><DeleteIcon style={{ fontSize: "24px" }} /></Button>
        </div>
      ),
    }
  ];



  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Customers" subtitle="Monitoring Customres" />
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px"
          }}
          onClick={handleAddModalOpen}
        >
          <AddBusinessIcon sx={{ mr: "10px", }} />
          Add Customer
        </Button>
{/*  */}
<Dialog open={isAddModalOpen} >
          <DialogTitle sx={{ backgroundColor: colors.blueAccent[700] }}>Add New Customer <CloseIcon sx={{ marginLeft: "390px" }} onClick={handleAddModalClose} /></DialogTitle>
          <DialogContent sx={{ backgroundColor: colors.grey[600] }}>
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={checkoutSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                dirty,
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
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      name="name"
                      error={!!touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Type"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.type}
                      name="type"
                      error={!!touched.type && !!errors.type}
                      helperText={touched.type && errors.type}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Phone Number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phoneNumber}
                      name="phoneNumber"
                      error={!!touched.phoneNumber && !!errors.phoneNumber}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Contact Persone"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.contactPerson}
                      name="contactPerson"
                      error={!!touched.contactPerson && !!errors.contactPerson}
                      helperText={touched.contactPerson && errors.contactPerson}
                      sx={{ gridColumn: "span 2" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="number"
                      label="Balance"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.balance}
                      name="balance"
                      error={!!touched.balance && !!errors.balance}
                      helperText={touched.balance && errors.balance}
                      sx={{
                        "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button": {
                          display: "none",
                        },
                        gridColumn: "span 2",
                      }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Active"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.activeStatus}
                      name="activeStatus"
                      error={!!touched.activeStatus && !!errors.activeStatus}
                      helperText={touched.activeStatus && errors.activeStatus}
                      sx={{
                        gridColumn: "span 2",
                      }}
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" mt="20px">
                    <Button type="submit" color="createButone" variant="contained" disabled={isSubmitting || !dirty}>
                      Create New Customer
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>

      </Box>

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },

        }}
      >
        <DataGrid rows={data} columns={columns} components={{ Toolbar: GridToolbar }} />
      </Box>
    </Box>
  );
};

const phoneRegExp =
  /^(?:994)(50|51|55|60|70|77|99|10)(\d{7})$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("Name cannot be null"),
  type: yup.string().required("Type cannot be null"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number cannot be null"),
  contactPerson: yup.string().required("Contact Person cannot be null"),
  reseller: yup.string().required("required"),
  activeStatus: yup.string().required("Important!").oneOf("active","deactive"),
  balance: yup.string().required("Balance cannot be null"),
});
const initialValues = {
  name: "",
  type: "",
  phoneNumber: "",
  contactPerson: "",
  reseller: "",
  activeStatus: "",
  balance: "",
};

export default Customers;