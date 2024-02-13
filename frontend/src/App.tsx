
import './App.css'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './layout/layout'
import Register from './pages/Register'
import SignIn from './pages/siginIn'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><p>Home Page
          </p></Layout>} />
        <Route path="/search" element={<Layout><p>Search Page
          </p></Layout>} />

          <Route path='/register' element={<Layout><Register/></Layout>}/> 
          <Route path='/sign-In' element={<Layout><SignIn/></Layout>}/> 

      </Routes>
    </Router>
   )
}

export default App
