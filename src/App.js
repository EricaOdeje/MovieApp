import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReadMovies from './Components/readmovies';
import Edit from './Components/edit';
import Login from './Components/login';
import Register from './Components/register';
import CreateMovie from './Components/CreateMovie';

{/*  To allow client side routing, I installed the package 
  npm install react-router-dom */}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*  I added a navbar by installing bootstrap and created nav links*/}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">Movie CRUD</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/readmovies">ReadMovies</Nav.Link>
              <Nav.Link href="/CreateMovie">CreateMovie</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          {/* I defined routes for different components */}

          <Route path='readmovies' element={<ReadMovies></ReadMovies>}></Route>
          <Route path='/CreateMovie' element={<CreateMovie></CreateMovie>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
