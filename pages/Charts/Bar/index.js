import { Box } from '@mui/material'
import Header from '../../../components/Header'
import BarChart from '../../../components/charts/barChart'

const Dashboard = () => {
  return (
    <Box m='20px'>
      <Header title='Bar Chart' subtitle='Simple Bar Chart' />
      <Box
        height='75vh'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <BarChart />
      </Box>
    </Box>
  )
}

export default Dashboard
