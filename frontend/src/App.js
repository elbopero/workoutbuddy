import { BrowserRouter, Routes, Route} from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
      <div className="pages">
        <Routes>
          <Route
          path="/"
          element={<Home />}>

          </Route>
          <Route
          path="/login"
          element={<Login />}>

          </Route>
          <Route
          path="/signup"
          element={<Signup />}>

          </Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
