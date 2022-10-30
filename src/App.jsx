import {
  Routes, 
  Route,
  useLocation
} from 'react-router-dom';

import './App.css'
import { HomePage, HomePage2 } from './pages/home/home';
import { NoFountPage } from './pages/noFount/noFound';
import { SessionPage } from './pages/session/session';



function App() {
  let location = useLocation();
  return (

    <div className="App">
        <h1>{location.pathname}</h1>
        <Routes>
            <Route path='/' element={<HomePage location={location} />} />
            <Route path='/session/*' element={<SessionPage location={location} />}  />
            <Route path='/home2' element={<HomePage2 location={location} />} />
            
            <Route path='*' element={<NoFountPage/>} />
        </Routes>
    </div>
  )
}

export default App
