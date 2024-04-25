import { useState } from "react";
import "./App.css";
import {
  AppBar,
  Box,
  CircularProgress,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import UserCard from "./components/UserCard";
import Transactions from "./components/Transactions";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import BalanceCard from "./components/BalanceCard";

function App() {
  const [walltetInput, setWalletInput] = useState("");
  const [userInfo, setUserInfo] = useState(false);
  const [loader, setLoader] = useState(false);

  // redux
  const transactionInfo = useSelector((state) => state.wallet.transactions);


  // search only by 34rng4QwB5pHUbGDJw1JxjLwgEU8TQuEqv
  const SearchWalletInfo = (value) => {
    if (!value) {
      return alert("required field");
    } else if (value === "34rng4QwB5pHUbGDJw1JxjLwgEU8TQuEqv") {
      setLoader(true);
      setTimeout(() => {
        setUserInfo(true);
        setLoader(false);
      }, 3000);
    } else {
      alert("only will work for - 34rng4QwB5pHUbGDJw1JxjLwgEU8TQuEqv");
      setWalletInput('')
      setUserInfo(false);
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Hornet - Front End Assignment
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        {!userInfo && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              borderRadius: 3,
            }}
          >
            <img
              src="../img/eth.png"
              style={{
                objectFit: "contain",
                height: 250,
                mixBlendMode: "multiply",
              }}
            />
          </Box>
        )}
        {/* search input box */}
        <Box pt={8} pb={1}>
          <TextField
            fullWidth
            label="Enter Wallet Address"
            value={walltetInput}
            autoComplete="off"
            onChange={(e) => setWalletInput(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    color="primary"
                    onClick={() => SearchWalletInfo(walltetInput)}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {loader ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 5,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          userInfo && (
            <>
              {/* start user */}
              <UserCard />
              {/* end user */}

              {/* wallet card start */}
           <BalanceCard />
              {/* wallet card end */}

              {/* summery start */}

              <Box mt={1}>
                <Typography variant="h6" color="primary.main">
                  Summery
                </Typography>
                <Typography variant="p" color="primary.description">
                  This address has transacted 2 times on the Bitcoin blockchain.
                  It has received a total of 0.00759000 BTC $505.18 and has sent
                  a total of 0.00000000 BTC $0.00 The current value of this
                  address is 0.00759000 BTC $505.18.
                </Typography>
              </Box>

              {/* summery end */}

              {/* transaction start */}

              <Box py={2}>
                <Typography variant="h6" color="primary.main">
                  Transactions
                </Typography>
              </Box>

              <Box pb={8}>
                {transactionInfo?.map((item, i) => (
                  <Transactions item={item} key={i} />
                ))}
              </Box>
              {/* transactions end  */}
            </>
          )
        )}
      </Container>
    </>
  );
}

export default App;
