import { Route, Routes } from "react-router"
import './assets/styles/main.scss'
import { AppHeader } from "./cmps/AppHeader"
import routes from "./routes"
import { AppFooter } from "./cmps/AppFooter"

function RootCmp() {

  return (
    <div className="app">
      <AppHeader />
      <main className='content'>
        <Routes>
          {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
        </Routes>
      </main>
      <AppFooter />
    </div>
  )
}

export default RootCmp
