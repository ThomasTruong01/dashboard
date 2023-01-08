import { Box, useTheme } from '@mui/material'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'
import { tokens } from '../../data/theme'
import Summary from '../../components/dashboard/Summary'
import Header from '../../components/Header'
import RevenueGenerated from '../../components/dashboard/RevenueGenerated'
import RecentTransactions from '../../components/dashboard/RecentTransactions'
import DownloadReports from '../../components/dashboard/DownloadReports'
import Campagin from '../../components/dashboard/Campagin'
import SalesQuantity from '../../components/dashboard/SalesQuantity'
import Geography from '../../components/dashboard/Geography'

const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='Dashboard' subtitle='Welcome to your Dashboard' />
        <DownloadReports />
      </Box>
      {/* Grid & Charts */}
      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gridAutoRows='140px'
        gap='2em'
        mt='2em'
      >
        
        {/* Row 1 */}
        <Summary
          title='12,361'
          subtitle='Email Sent'
          progress='0.75'
          increase='+14%'
          icon={
            <PointOfSaleIcon
              sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
            />
          }
        />
        <Summary
          title='321,261'
          subtitle='Sales Obtained'
          progress='0.5'
          increase='+21%'
          icon={
            <PointOfSaleIcon
              sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
            />
          }
        />
        <Summary
          title='4,112'
          subtitle='New Clients'
          progress='0.3'
          increase='+5%'
          icon={
            <PersonAddIcon
              sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
            />
          }
        />
        <Summary
          title='1,312,324'
          subtitle='Traffic Inbound'
          progress='0.8'
          increase='+43%'
          icon={
            <TrafficIcon
              sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
            />
          }
        />

        {/* Row 2 */}
        <RevenueGenerated />
        <RecentTransactions />

        {/* Row 3 */}
        <Campagin />
        <SalesQuantity />
        <Geography />
      </Box>
    </Box>
  )
}

export default Dashboard
