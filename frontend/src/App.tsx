
import './App.css'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './layout/layout'
import Register from './pages/Register'
import SignIn from './pages/siginIn'
import { useAppContext } from './contexts/AppContext'
import AddHotel from './pages/addHotel'
function App() {
  const {isLoggedin}=useAppContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><p>Home Page
          </p></Layout>} />
        <Route path="/search" element={<Layout><p>Search Page
          </p></Layout>} />

          <Route path='/register' element={<Layout><Register/></Layout>}/> 
          <Route path='/sign-In' element={<Layout><SignIn/></Layout>}/> 

{isLoggedin && <>
  <Route path='/add-hotel' element={<Layout><AddHotel/></Layout>}/> 


</>}
      </Routes>
    </Router>
   )
}

export default App
