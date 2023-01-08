import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../data/theme'
import GeographyChart from '../charts/GeographyChart'

const Geography = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          p='30px'
          borderRadius='1em'
          sx={{ boxShadow: 3 }}
        >
          <Typography variant='h5' fontWeight='600' sx={{ mb: '15px' }}>
            Geography Based Traffic
          </Typography>
          <Box height='200px'>
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
    )
}

export default Geography
