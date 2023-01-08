import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../data/theme'
import { mockTransactions } from '../../data/mockData'

const RecentTransactions = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          overflow='auto'
          borderRadius='1em'
          sx={{ boxShadow: 3 }}
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
  )
}

export default RecentTransactions
