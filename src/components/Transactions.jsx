import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Fab, Grid, IconButton, Tooltip } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import Divider from '@mui/material/Divider';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useSelector } from "react-redux";
import copy from "copy-to-clipboard";



export default function Transactions({item}) {
  

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function formatBlockTime(blockTime) {
    const date = new Date(blockTime * 1000);
    return date.toLocaleString();
  }

  // must be reuseable 
  const handleCopy = (text, e) => {
    e.stopPropagation();
    copy(text)
    alert('copied')
  }

  return (
    <Box pb={1} key={item?.txid}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ boxShadow: "none", border: "1px solid #e8e8e8", margin: 0, padding: "0.6rem 0", alignItems: 'center' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Grid container spacing={2} >
            <Grid item xs={12} sm={2} md={1}>
              <Fab size="small" color="primary" aria-label="add">
                <ArrowDownwardIcon />
              </Fab>
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
              <Typography fontSize={`0.85rem`}>ID: {item?.txid?.slice(0, 6)}</Typography>
              <Typography fontSize={`0.95rem`}>{formatBlockTime(item?.blocktime)}</Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
              <Typography fontSize={`0.85rem`}>Confirmation</Typography>
              <Typography fontSize={`0.95rem`}>{item?.confirmations}</Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
              <Typography fontSize={`0.85rem`}>{item?.fee?.amount} {item?.fee?.unit}</Typography>
              <Typography fontSize={`0.95rem`}>Hash <Tooltip title="click to copy"><IconButton
              onClick={(e) => handleCopy(item?.hash, e)
              }
              ><ContentCopyIcon sx={{fontSize: 12}} /></IconButton></Tooltip> </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <Divider />
        <AccordionDetails >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2} md={1}>
              <SyncAltIcon />
            </Grid>
            <Grid item xs={12} sm={5} md={5}>
              <Typography  fontSize={`0.85rem`}>From</Typography>
              <Typography variant="p" fontSize={`0.85rem`} sx={{color: 'primary.main'}}>
                {item?.vin?.[0]?.scriptSig?.address} <Tooltip title="click to copy">
                  <IconButton onClick={(e) => handleCopy(item?.vin?.[0]?.scriptSig?.address , e)}>
                    <ContentCopyIcon sx={{fontSize: 14}} />
                  </IconButton>
                  </Tooltip>
              </Typography>
              <Typography fontSize={`0.95rem`}> <strong>BTC</strong></Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={6}>
              <Typography  fontSize={`0.85rem`}>To</Typography>

              <Typography variant="p" fontSize={`0.85rem`} sx={{color: 'primary.main'}}>
                34rng4QwB5pHUbGDJw1JxjLwgEU8TQuEqv <Tooltip title="click to copy">
                  <IconButton onClick={(e) => handleCopy('34rng4QwB5pHUbGDJw1JxjLwgEU8TQuEqv' , e)}>
                    <ContentCopyIcon sx={{fontSize: 14}} />
                  </IconButton>
                  </Tooltip>
              </Typography>
              <Typography fontSize={`0.95rem`}> <strong>BTC</strong></Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

     
    </Box>
  );
}
