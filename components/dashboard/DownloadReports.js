import { Button, useTheme } from '@mui/material'
import { tokens } from '../../data/theme'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'

const DownloadReports = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
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
  )
}

export default DownloadReports
