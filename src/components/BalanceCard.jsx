import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

export default function BalanceCard() {
  const walletInfo = useSelector((state) => state.wallet.wallet);

  return (
    <Box
    display="flex"
    justifyContent="space-between"
    p={2}
    mt={0.5}
    bgcolor="primary.main"
    borderRadius={3}
    color="#fff"
    mb={2}
  >
    <Box>
      <Typography variant="p">Bitcoin Balance</Typography>
      <Typography variant="h6" color="primary.yellow">
       {walletInfo?.txHistory?.balanceSat / 100000000}
      </Typography>
    </Box>

    <Box>
      <Typography variant="p">Transactions</Typography>
      <Typography
        variant="h6"
        textAlign="center"
        color="primary.yellow"
      >
         {walletInfo?.txHistory?.txCount}
      </Typography>
    </Box>
  </Box>
  )
}
