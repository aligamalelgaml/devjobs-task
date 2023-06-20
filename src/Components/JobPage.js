import axios from "axios";
import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { CssBaseline } from "@mui/material";
import Header from "./Header";
import Filter from "./Filter";



export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });


function JobPage() {

  useEffect(() => {
    console.log("Making Fetch Request...")
    // axios.get(`https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_jobs&q=${query}&location=${location}&start=${offset}&api_key=64d6fcdf8161678935df1bc459aca0b9a5c1c075b31a9cdea28f83993ada40c0`)
    // .then(results => {
    //   console.log(results.data.jobs_results);
    // })
    // .catch(error => {
    //   console.error(error);
    // });

  }, [])

  const search = (data) => {
    console.log(data)
  }

  return (
    <>
      <Header/>
      <Filter searchCB={search}/>

    </>
  );
}






const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: "#5964E0"
        },
        secondary: {
          main: "#939BF4"
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
          main: "#5964E0"
        },
        secondary: {
          main: "#939BF4"
        },
        divider: 'rgba(110, 128, 152, 0.2)',
        background: {
          default: "#121721",
          paper: "#121721",
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
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
          <CssBaseline/>
          <JobPage />

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

