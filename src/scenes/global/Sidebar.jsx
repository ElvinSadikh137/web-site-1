import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import GroupIcon from '@mui/icons-material/Group';
import TopicIcon from '@mui/icons-material/Topic';
import TelegramIcon from '@mui/icons-material/Telegram';
import EditNoteIcon from '@mui/icons-material/EditNote';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PublicIcon from '@mui/icons-material/Public';
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LayersIcon from '@mui/icons-material/Layers';
import GavelIcon from '@mui/icons-material/Gavel';
import ChecklistIcon from '@mui/icons-material/Checklist';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

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
      }}
    >

      <ProSidebar collapsed={isCollapsed}>
        <Menu
          iconShape="square"
        >

          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 10px 0",
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
                <Typography variant="h2" color={colors.grey[100]}>
                  <GraphicEqIcon />
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="5px">
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "15px 0 0 0" }}
                >
                  Elvin Sadikh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Developer
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "2%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Reports
            </Typography>
            <Item
              title="Requests"
              to="/call-requests"
              icon={<AssignmentIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Summary"
              to="/summary"
              icon={<AssignmentTurnedInIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="By Gateway"
              to="/call-requests/by-gateway"
              icon={<MeetingRoomIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Users
            </Typography>
            <Item
              title="Customers"
              to="/customers"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Users"
              to="/users"
              icon={<GroupIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Settings
            </Typography>
            <Item
              title="Tariffs"
              to="/tariffs"
              icon={<TopicIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Destinations"
              to="/destinations"
              icon={<TelegramIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sender Name"
              to="/sender-name"
              icon={<EditNoteIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Prompts"
              to="/prompts"
              icon={<VolumeUpIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
            title="Languages"
            to="/prompt-lang"
            icon={<PublicIcon />}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Sip Profiles"
            to="/sip-profiles"
            icon={<AccountTreeIcon />}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Gateways"
            to="/gateways"
            icon={<MeetingRoomIcon />}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Gateway Groups"
            to="/gateway-groups"
            icon={<LayersIcon />}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Number rewriting"
            to="/number-rewrite-rules"
            icon={<GavelIcon />}
            selected={selected}
            setSelected={setSelected}
            />
            <Item
            title="Send Api Request"
            to="/api-request/request"
            icon={<ChecklistIcon />}
            selected={selected}
            setSelected={setSelected}
            />


            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 10px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>

      </ProSidebar>

    </Box >
  );
};

export default Sidebar;