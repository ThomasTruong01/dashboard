import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../data/theme'
import BarChart from '../charts/barChart'

const SalesQuantity = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      gridColumn='span 4'
      gridRow='span 2'
      backgroundColor={colors.primary[400]}
      borderRadius='1em'
      sx={{ boxShadow: 3 }}
    >
      <Typography variant='h5' fontWeight='600' sx={{ p: '30px 30px 0 30px' }}>
        Sales Quantity
      </Typography>
      <Box height='250px'>
        <BarChart isDashboard={true} />
      </Box>
    </Box>
  )
}

export default SalesQuantity
