import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

// theme
import { theme } from "@/theme";

// context
import { ChannelsProvider } from "@/context";

// pages
import { Home, Report } from "@/pages";

const App = () => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <ChannelsProvider>
        <SnackbarProvider maxSnack={3}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/report" element={<Report />} />

              {/* Not Found Pages */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      </ChannelsProvider>
    </ThemeProvider>
  </StyledEngineProvider>
);

export default App;
