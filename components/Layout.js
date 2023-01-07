import { ColorModeContext, useMode } from '../data/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Sidebar from './global/SideBar/Sidebar'
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
