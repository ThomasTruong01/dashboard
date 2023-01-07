import { Box } from '@mui/material'
import Header from '../../../components/Header'
import LineChart from '../../../components/charts/lineChart'

const Line = () => {
  return (
    <Box m='20px'>
      <Header title='Line Chart' subtitle='Simple Line Chart' />
      <Box
        height='75vh'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <LineChart />
      </Box>
    </Box>
  )
}

export default Line
