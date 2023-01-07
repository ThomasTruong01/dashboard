import { Box } from '@mui/material'
import Header from '../../../components/Header'
import GeoChart from '../../../components/charts/GeographyChart'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'


const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px'>
        <Header title='Geography Map' subtitle='Simple Geography Map' />
      <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius='4px' width='100%'>
        <GeoChart isDashboard={false} />
      </Box>
    </Box>
  )
}

export default Dashboard
