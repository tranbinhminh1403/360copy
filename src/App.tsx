import './App.css'
import ThemeConfig from './themeConfig'
import {RouterProvider} from 'react-router-dom'
import {router} from './routes'

function App() {


  return (
    <>
      <ThemeConfig>
        <RouterProvider router={router} />
      </ThemeConfig>
    </>
  )
}

export default App
