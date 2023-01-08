import { Box, useTheme } from '@mui/material'
import { tokens } from '../../data/theme'
import StatsBox from '../StatsBox'

const Summary = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      gridColumn='span 3'
      backgroundColor={colors.primary[400]}
      display='flex'
      alignItems='center'
      justifyContent='center'
      borderRadius='1em'
      sx={{ boxShadow: 3 }}
    >
      <StatsBox
        title={title}
        subtitle={subtitle}
        progress={progress}
        increase={increase}
        icon={icon}
      />
    </Box>
  )
}

export default Summary
