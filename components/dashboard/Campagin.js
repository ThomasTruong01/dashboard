import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../data/theme'
import ProgressCircle from '../ProgressCircle'

const Campagin = () => {
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
          <Typography variant='h5' fontWeight='600'>
            Campaign
          </Typography>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mt='25px'
          >
            <ProgressCircle size='125' />
            <Typography
              variant='h5'
              color={colors.greenAccent[500]}
              sx={{ mt: '15px' }}
            >
              $48,354 Revenue Generated
            </Typography>
            <Typography>Includes extra misc expenditures and cost</Typography>
          </Box>
        </Box>
    )
}

export default Campagin
