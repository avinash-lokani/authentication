import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import {ListRendering} from "./Components/ListRendering"
function App() {
  const {isAuthenticated, isLoading} = useAuth0();
  if(isLoading){
    return <div>Loading...</div>
  }
  if(isAuthenticated){
    return (
      <BrowserRouter>
        <Routes>
    
          <Route path='/' element={<ListRendering/>} />
        </Routes>
      </BrowserRouter>
    );
  }else{
    return <LoginPage/>
  }
}

export default App;
