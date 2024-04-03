import { AppBar, Box, Container, MenuItem, Typography } from "@mui/material";
import React from "react";
import ComponentSearch from "../Search/Search";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};

const Header = () => {
  return (
    <Container maxWidth='lg'>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          zIndex: 999,
          borderBottom: '1px solid #161616',
          backgroundImage: 'linear-gradient(to bottom, #161616, #161616)',
        }}>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px'
          }}
        >
          <img src="https://s3-alpha-sig.figma.com/img/5dae/aab3/0311d87c05e652db072c2fab57df9cee?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BatVZz0U1nNTbQI2xgBMvLuLCl20CVoCgfR~naizNrIOFJXKknguwsKbsRzE5VBtzj2j4hgkjZXyuHyb-0TekrX4EQTSoaEdao1oPBuA9y-M3pqX9Rzdd02xkfpOlpl6Cr8VyiemfIUtiKPrzQZWHumRmsQLVoCzlJ2n7~NDqJMrTUqgmhJDkh-~oTGcEe7sTEMqOpHqYstuGeFWEiPPg8oJ5pCkxWfgYbw~8idVFG2GufU3aJh1j7YVXv-4x7vGYeXMnUk1OfetxQ0PzSsemjWDZxwqzR7vuvjdMkMOz54APQN7c9aib~nqdcmHUK0uBIv8p~62xWHO1mZbl~ok3A__"
            style={logoStyle}
            alt="logo sapatella"
          />
          <Box display={'flex'}>
            <MenuItem
              // onClick={() => scrollToSection('features')}
              sx={{ py: '6px', px: '12px' }}
            >
              <Typography variant="body2">
                Novidades
              </Typography>
            </MenuItem>
            <MenuItem
              // onClick={() => scrollToSection('testimonials')}
              sx={{ py: '6px', px: '12px' }}
            >
              <Typography variant="body2">
                Sapatos
              </Typography>
            </MenuItem>
            <MenuItem
              // onClick={() => scrollToSection('highlights')}
              sx={{ py: '6px', px: '12px' }}
            >
              <Typography variant="body2">
                Sandálias
              </Typography>
            </MenuItem>
            <MenuItem
              // onClick={() => scrollToSection('pricing')}
              sx={{ py: '6px', px: '12px' }}
            >
              <Typography variant="body2">
                Tênis
              </Typography>
            </MenuItem>
            <MenuItem
              // onClick={() => scrollToSection('faq')}
              sx={{ py: '6px', px: '12px' }}
            >
              <Typography variant="body2">
                Bolsas & Acessórios
              </Typography>
            </MenuItem>
            <MenuItem
              // onClick={() => scrollToSection('faq')}
              sx={{ py: '6px', px: '12px' }}
            >
              <Typography variant="body2">
                OFF
              </Typography>
            </MenuItem>
            <MenuItem>
              <ComponentSearch />
            </MenuItem>
            <MenuItem>
              <PersonOutlineOutlinedIcon />
            </MenuItem>
            <MenuItem>
              <FavoriteBorderOutlinedIcon />
            </MenuItem>
            <MenuItem>
              <ShoppingCartOutlinedIcon />
            </MenuItem>
          </Box>
        </Box>
      </AppBar>
    </Container >
  );
};


export default Header;