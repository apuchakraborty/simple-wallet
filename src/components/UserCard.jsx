import React from "react";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Chip,
  Tooltip,
  IconButton,
} from "@mui/material";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import copy from "copy-to-clipboard";

const UserCardWrapper = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: theme.spacing(2),
  boxShadow: "none",
  background: "transparent",
  border: "none",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: "120px",
  height: "120px",
  transform: "rotate(30deg)",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.yellow,

  "&:hover": {
    transform: "rotate(360deg)",
    color: theme.palette.primary.yellow,
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  "@media (max-width: 600px)": {
    maxWidth: "150px",
  },
}));

const UserCard = () => {
  const walletInfo = useSelector((state) => state.wallet.wallet);

   // must be reuseable 
   const handleCopy = (text, e) => {
    e.stopPropagation();
    copy(text)
    alert('copied')
  }

  return (
    <UserCardWrapper>
      <StyledAvatar>
        <CurrencyBitcoinIcon sx={{ fontSize: 64 }} />
      </StyledAvatar>

      <CardContent>
        <Box
          sx={{
            "@media (max-width: 600px)": {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
            "@media (max-width: 400px)": {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <Typography variant="h6" component="h6" mb={1}>
            {`${walletInfo?.validateaddress?.address?.slice(
              0,
              4
            )}-${walletInfo?.validateaddress?.address?.slice(-4)} `}
          </Typography>

          <Chip label={walletInfo?.encoding} />
        </Box>
        <Box my={1.8} sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgcolor="primary.main"
              borderRadius={2}
              height={40}
              width={40}
            >
              <QrCodeIcon sx={{ fontSize: 24, color: "#fff" }} />
            </Box>
          </Box>
          <Box ml={1}>
            <Typography fontSize={14}>Bitcoin Address</Typography>
            <StyledTypography fontSize={18}>
              {walletInfo?.validateaddress?.address}
              <Tooltip title="Click to copy">
                <IconButton
                  onClick={(e) => handleCopy(walletInfo?.validateaddress?.address, e)}
                >
                  <ContentCopyIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </Tooltip>
            </StyledTypography>
          </Box>
        </Box>
      </CardContent>
    </UserCardWrapper>
  );
};

export default UserCard;
