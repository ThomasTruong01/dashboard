import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../data/theme'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import LineChart from '../charts/lineChart'

const RevenueGenerated = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
          gridColumn='span 8'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          borderRadius='1em'
          sx={{ boxShadow: 3 }}
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
  )
}

export default RevenueGenerated
