import { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import { tokens } from '../../pages/theme'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutline'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutline'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutline'
import BarOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieOutlinedIcon from '@mui/icons-material/PieChartOutline'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link href={to} />
    </MenuItem>
  )
}
const MenuItems = [
  {
    type: 'item',
    title: 'Dashboard',
    to: 'Scenes/Dashboard',
    icon: <HomeOutlinedIcon />
  },
  {
    type: 'title',
    title: 'Data'
  },
  {
    type: 'item',
    title: 'Manage Team',
    to: 'Scenes/Team',
    icon: <PeopleOutlinedIcon />
  },
  {
    type: 'item',
    title: 'Contacts Information',
    to: 'Scenes/Contacts',
    icon: <ContactsOutlinedIcon />
  },
  {
    type: 'item',
    title: 'Invoices Balances',
    to: 'Scenes/Invoices',
    icon: <ReceiptOutlinedIcon />
  },
  {
    type: 'title',
    title: 'Pages'
  },
  {
    type: 'item',
    title: 'Profile Form',
    to: 'Scenes/Form',
    icon: <PersonOutlinedIcon />
  },
  {
    type: 'item',
    title: 'Calendar',
    to: 'Scenes/Calendar',
    icon: <CalendarTodayOutlinedIcon />
  },
  {
    type: 'item',
    title: 'FAQ Page',
    to: 'Scenes/FAQ',
    icon: <HelpOutlinedIcon />
  },
  {
    type: 'title',
    title: 'Charts'
  },
  {
    type: 'item',
    title: 'Bar Chart',
    to: 'Scenes/Bar',
    icon: <BarOutlinedIcon />
  },
  {
    type: 'item',
    title: 'Pie Chart',
    to: 'Scenes/Pie',
    icon: <PieOutlinedIcon />
  },
  {
    type: 'item',
    title: 'Line Chart',
    to: 'Scenes/Line',
    icon: <TimelineOutlinedIcon />
  },
  {
    type: 'item',
    title: 'Geography Chart',
    to: 'Scenes/Geography',
    icon: <MapOutlinedIcon />
  }
]

const Sidebar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]}!important`
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent!important'
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important'
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb!important'
        },
        '& .pro-menu-item.active': {
          color: '#6870fa!important'
        }
      }}
    >
      <ProSidebar>
        <Menu iconShape='square'>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100]
            }}
          >
            {!isCollapsed && (
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                ml='15px'
              >
                <Typography variant='h3' color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* users */}
          {!isCollapsed && (
            <Box mb='25px'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <img
                  alt='profile-user'
                  width='100px'
                  height='100px'
                  src='./assets/user.jpeg'
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign='center'>
                <Typography
                  variant='h2'
                  color={colors.grey[100]}
                  fontWeight='bold'
                  sx={{ m: '10px 0 0 0' }}
                >
                  Thomas Truong
                </Typography>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                  Front End Developer
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            {MenuItems.map((menuItem, idx) => {
              return menuItem.type === 'item' ? (
                <Item
                  title={menuItem.title}
                  to={menuItem.to}
                  icon={menuItem.icon}
                  selected={selected}
                  setSelected={setSelected}
                  key={idx}
                />
              ) : (
                <Typography
                  variant='h6'
                  color={colors.grey[300]}
                  sx={{ m: '15px 0 5px 20px' }}
                >
                  {menuItem.title}
                </Typography>
              )
            })}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar
