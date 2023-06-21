import axios from "axios";
import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Button, Container, CssBaseline, Grid } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobDetails from './JobDetails';
import Header from "./Header";
import Filter from "./Filter";
import JobCard from "./JobCard";


export const ColorModeContext = React.createContext({ toggleColorMode: () => { } }); // Defining structure of context.

function JobPage() {
  const theme = useTheme();
  const [jobResults, setJobResults] = useState([]);
  const [offset, setOffset] = useState(0);
  const [fulltimeOnly, setFulltimeoOnly] = useState(false);
  const [searchParams, setSearchParams] = useState([]);

  /**
   * Main function responsiable for making a new search, accepts search strings and boolean value for full time job filtering.
   * @param {Array} Array composed of two strings for each type of search and a boolean value for checkbox state. 
   */
  const search = ({ genericSearchText, locationSearchText, fulltimeChecked }) => {
    console.log("Searching for:", genericSearchText, " @", locationSearchText, " and full time only: ", fulltimeChecked)

    setOffset(0); // Reset offset to be able to use Load More button correctly.
    setSearchParams([genericSearchText, locationSearchText]); // Keep values of current search to create additional searches later on.
    setFulltimeoOnly(fulltimeChecked); // State tracking value of full time job filtering to be turned on or off.

    axios.get(`https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_jobs&q=${genericSearchText}&location=${locationSearchText}&api_key=64d6fcdf8161678935df1bc459aca0b9a5c1c075b31a9cdea28f83993ada40c0`)
    .then(results => setJobResults(results.data.jobs_results))
    .catch(error =>console.error(error));
  }

  /**
   * Increments offset by 10, useEffect will create a new fetch request with correct offset once setOffset is finished updating & not equal to zero.
   */
  const loadMore = () => {
    setOffset(offset + 10); 
  }

  /**
   * Main function responsible for fetching more jobs, relies on current offset to skip first {offset} jobs and fetch the next 10.
   */
  useEffect(() => {
    if(offset !== 0) {
      axios.get(`https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_jobs&q=${searchParams[0]}&location=${searchParams[1]}&start=${offset}&api_key=64d6fcdf8161678935df1bc459aca0b9a5c1c075b31a9cdea28f83993ada40c0`)
      .then(results => setJobResults(jobResults.concat(results.data.jobs_results)))
      .catch(error =>console.error(error));
    }
  }, [offset])

  // const loadMore = async () => {
  //   setOffset(offset + 10);
  
  //   try {
  //     await setOffset(offset + 10);
  //     const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_jobs&q=${searchParams[0]}&location=${searchParams[1]}&start=${offset}&api_key=64d6fcdf8161678935df1bc459aca0b9a5c1c075b31a9cdea28f83993ada40c0`);
  //     setJobResults(jobResults.concat(response.data.jobs_results));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  return (
    <>
      <Header />
      <Filter searchCB={search} />

      <Container sx={{ marginTop: "35px" }}>
        <Grid container rowSpacing={8} columnSpacing={4}>
          {jobResults
            .filter(job => !fulltimeOnly || job.detected_extensions.schedule_type === 'Full-time')
            .map(job => (
              <Grid item key={job.job_id} xs={12} sm={6} md={4}>
                <JobCard job={job} />
              </Grid>
            ))}
        </Grid>


      </Container>

      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: "70px"
        }}
      >
        
      {jobResults.length !== 0 && <Button onClick={loadMore} variant="contained" sx={{ '&:hover': { backgroundColor: theme.palette.primary.hover } }}>Load More</Button>}

      </Container>
    </>
  );
}

// Theme creation:
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: "#5964E0",
          hover: "#939BF4",
          btn: "#5964E0"
        },
        secondary: {
          main: 'rgba(89, 100, 224, 0.1)',
          hover: 'rgba(89, 100, 224, 0.35)'
        },
        background: {
          default: "#F4F6F8",
          paper: "#FFFFFF",
        },
        divider: 'rgba(110, 128, 152, 0.2)',
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : {
        // palette values for dark mode
        primary: {
          main: "#5964E0",
          hover: "#939BF4",
          btn: "white"
        },
        secondary: {
          main: 'rgba(89, 100, 224, 0.1)',
          hover: 'rgba(89, 100, 224, 0.35)'
        },
        divider: 'rgba(110, 128, 152, 0.2)',
        background: {
          default: "#121721",
          paper: "#19202D",
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },

  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          // Controls default (unchecked) color for the thumb
          color: "#5964E0",
          "&:hover": { color: "#939BF4" }
        },
        colorPrimary: {
          "&.Mui-checked": {
            // Controls checked color for the thumb
            color: "#5964E0",
            "&:hover": { color: "#939BF4" }
          }
        },
        track: {
          // Controls default (unchecked) color for the track
          opacity: 0.2,
          backgroundColor: "#fff",
          ".Mui-checked.Mui-checked + &": {
            // Controls checked color for the track
            opacity: 0.7,
            backgroundColor: "#fff"
          }
        }
      }
    }
  }
});

export default function App() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme(getDesignTokens(mode)),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<JobPage />} />
            <Route path="/job" element={<JobDetails />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

