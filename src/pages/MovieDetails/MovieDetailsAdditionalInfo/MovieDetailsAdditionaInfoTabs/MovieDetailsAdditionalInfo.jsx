import * as React from 'react';
import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import Cast from 'pages/MovieDetails/MovieDetailsAdditionalInfo/AdditionalFilmInfoInTabs/Cast/Cast';
// import Reviews from 'pages/MovieDetails/MovieDetailsAdditionalInfo/AdditionalFilmInfoInTabs/Reviews/Reviews';
// import { StyledMuiTab } from './AdditionalFilmInfoInTabs.module';
import { Tab } from '@mui/material';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const MovieDetailsAdditionalInfo =
  function MovieDetailsAdditionalInfo() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            {/* <TabList onChange={handleChange} aria-label="lab API tabs example"> */}
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              TabIndicatorProps={{
                sx: { backgroundColor: '#ffc700' },
              }}
              sx={{
                '& .MuiTab-root': {
                  color: '#fff',
                  transition: 'font-size 0.3s ease',
                  '&.Mui-selected': {
                    color: '#ffc700',
                  },
                  '&:hover': {
                    color: '#ffc700',
                  },
                },
              }}
            >
              <Tab label="Cast" value="1" />
              <Tab label="Reviews" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Cast />
          </TabPanel>
          <TabPanel value="2">
            <Reviews />
          </TabPanel>
        </TabContext>
      </Box>
    );
  };

///
///
///
///
///
