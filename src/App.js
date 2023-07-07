import logo from './logo.svg';
import './App.css';
import { styled } from 'styled-components';
import { Route, Routes, useParams } from 'react-router-dom';
import ProductAll from './Component/ProductAll';
import NavBar from './Component/NavBar';
import Login from './Component/Login';
import { useEffect, useState } from 'react';
import PrivateRouter from './Component/PrivateRouter';

const Container = styled.div`
  height: 100%;
  overflow-x: hidden;
`
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("login", authenticate)
  }, [authenticate]);

  return (
    <Container>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<ProductAll />}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />}/>
        <Route path='/products/:id' element={<PrivateRouter authenticate={authenticate} />}/>
      </Routes>
    </Container>
  );
}

export default App;
