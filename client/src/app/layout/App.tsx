import {AppContainer} from "@/components/app-container";
import { NavBar } from "@/components/nav-bar";
import { ThemeProvider } from './theme-provider';
import { Outlet } from "react-router-dom";

function App() {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppContainer>
          <NavBar />
          <div className="h-[66px] block" />
          <Outlet />
        </AppContainer>
      </ThemeProvider>
  )
}

export default App
