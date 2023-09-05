import { Box, Dialog, useTheme, DialogTitle, DialogContent, TextField, Button, FormControlLabel, Radio } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PageviewIcon from '@mui/icons-material/Pageview';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { ScaleLoader } from "react-spinners";
import ServerError from "../../components/ServerError";
import Information from "../../components/Customer/Information";
import Update from "../../components/Customer/Update";
import Save from "../../components/Customer/Save";

const Customers = () => {
  const theme1 = useTheme();

  const colors = tokens(theme1.palette.mode);

  const [customerInfo, setCustomerInfo] = useState(null);

  const [customerUpdate, setCustomerUpdate] = useState(null);

  const [isCustomerInfoOpen, setIsCustomerInfoOpen] = useState(false);

  const [isCustomerUpdateOpen, setIsCustomerUpdateOpen] = useState(false);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  
  const [error, setError] = useState(null);

  const fetchData = () => {
    axios
      .get("http://localhost:8080/customers/customersInfo")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <Box display="flex" justifyContent="center" alignItems="center" height="100vh"><ScaleLoader color="#36d7b7" /></Box>;

  if (error) {
    return <div><ServerError /></div>;
  }

  const viewCustomer = async (customer) => {
    const id = customer.id;
    try {
      const response = await axios.post('http://localhost:8080/customers/customersInfoById', { id });
      setCustomerInfo(response.data);
      setIsCustomerInfoOpen(true);
    } catch (error) {
      console.error("Müşteri bilgilerini alma hatası:", error);
    }
  };

  const updateCustomer = (customer) => {
    setCustomerUpdate(customer);
    setIsCustomerUpdateOpen(true);
    fetchData();
  };

  const deleteCustomer = async (customer) => {
    const id = customer.id;
    try {
      await axios.post('http://localhost:8080/customers/deleteCustomer', { id });
      fetchData();
    } catch (error) {
    }
  };

  const addCustomer = () => {
    setIsAddModalOpen(true);
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
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <div>
          <Button sx={{
            backgroundColor: "#83df77",
            color: colors.white[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "5px",
            borderRadius: "24px"
          }} onClick={() => viewCustomer(params.row)}><PageviewIcon style={{ fontSize: "24px" }} /></Button>

          <Button sx={{
            backgroundColor: "#83df77",
            color: colors.white[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "5px",
            borderRadius: "24px"
          }} onClick={() => updateCustomer(params.row)}><DriveFileRenameOutlineIcon style={{ fontSize: "24px" }} /></Button>
          <Button sx={{
            backgroundColor: "#83df77",
            color: colors.white[100],
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
            backgroundColor: "#83df77",
            color: colors.white[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
          onClick={() => { addCustomer() }}
        >
          <AddBusinessIcon sx={{ mr: "10px", }} />
          Add Customer
        </Button>
        <Save isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      </Box>
      <Information data={customerInfo} isOpen={isCustomerInfoOpen} onClose={() => setIsCustomerInfoOpen(false)} />
      <Update data={customerUpdate} isOpen={isCustomerUpdateOpen} onClose={() => setIsCustomerUpdateOpen(false)} />
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
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#83df77",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#83df77",
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
    </Box >
  );
};

export default Customers;