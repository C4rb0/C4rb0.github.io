import { Outlet } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import './Layout.css'

const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout