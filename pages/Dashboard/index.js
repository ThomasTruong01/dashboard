import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../data/theme'
import { mockTransactions } from '../../data/mockData'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import TrafficIcon from '@mui/icons-material/Traffic'
import LineChart from '../../components/charts/lineChart'
import BarChart from '../../components/charts/barChart'
import GeographyChart from '../../components/charts/GeographyChart'
import StatsBox from '../../components/StatsBox'

import Header from '../../components/Header'
import ProgressCircle from '../../components/progressCircle'

const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='Dashboard' subtitle='Welcome to your Dashboard' />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              p: '10px 20px'
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: '10px' }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* Grid & Charts */}
      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gridAutoRows='140px'
        gap='20px'
      >
        {/* Row 1 */}
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatsBox
            title='12,361'
            subtitle='Email Sent'
            progress='0.75'
            increase='+14%'
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatsBox
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
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatsBox
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
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <StatsBox
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
        </Box>
        <Box
          gridColumn='span 8'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Box
            mt='25px'
            p='0 30px'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            width='100%'
          >
            <Box>
              <Typography
                variant='h5'
                fontWeight='600'
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant='h3'
                fontWeight='500'
                color={colors.greenAccent[500]}
              >
                $59,342,212
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: '26px', color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height='250px' width='100%' ml='-20px'>
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          overflow='auto'
        >
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            flexDirection='column'
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p='15px'
          >
            <Typography color={colors.grey[100]} variant='h5' fontWeight='600'>
              Recent Transactions
            </Typography>

            {mockTransactions.map((transaction, idx) => (
              <Box
                key={`${transaction.txid}-i`}
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                borderBottom={`4px solid ${colors.primary[500]}`}
                p='15px'
                width='100%'
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant='h5'
                    fontWeight='600'
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}>{transaction.date}</Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p='5px 10px'
                  borderRadius='4px'
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* Row 3 */}
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          p='30px'
        >
          <Typography variant='h5' fontWeight='600'>
            Campaign
          </Typography>
          <Box display='flex' flexDirection='column' alignItems='center' mt='25px'>
            <ProgressCircle size='125' />
            <Typography variant='h5' color={colors.greenAccent[500]} sx={{mt: '15px'}}>
              $48,354 Revenue Generated
            </Typography>
            <Typography>
              Includes extra misc expenditures and cost
            </Typography>
          </Box>
        </Box>

        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
        >
          <Typography variant='h5' fontWeight='600' sx={{p: '30px 30px 0 30px'}}>
            Sales Quantity
          </Typography>
          <Box height='250px'>
            <BarChart isDashboard={true}/>
          </Box>
        </Box>
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          p='30px'
        >
          <Typography variant='h5' fontWeight='600' sx={{mb: '15px'}}>
            Geography Based Traffic
          </Typography>
          <Box height='200px'>
            <GeographyChart isDashboard={true}/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
