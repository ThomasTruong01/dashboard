import { ColorModeContext, useMode } from '../pages/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Sidebar from './global/SideBar/SideBar'
import Topbar from './global/Topbar'

const Layout = ({ children }) => {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Sidebar />
        <div>
          <Topbar />
          {children}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Layout
