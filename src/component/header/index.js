import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { toast,ToastContainer } from 'react-toastify';

function Header(props) {
  const token = localStorage.getItem('token');
  const navigation= useNavigate();
  const dataUser = JSON.parse(localStorage.getItem('user'));
  const handleLogout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigation('/login');
    // toast.success("Successful logout")
  }

  return (
    <Navbar expand="lg" style={{position:'fixed',top:'0',left:'0',right:'0',zIndex:'100',background:"#FFF", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
      <Container>
        <Navbar.Brand>
        <NavLink to='/' className='nav-link'>
          Social Network
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <NavLink to='/home' className='nav-link' >
              Home
            </NavLink>
            <NavLink to='/favorite' className='nav-link' >
              Feed 
            </NavLink>
          </Nav>
          {
            token ? <Nav>Hello,<NavLink to={`/profile/${dataUser.username}`} style={{fontWeight:'600',color:'red',textDecoration:'none'}}>&nbsp;{dataUser?.username}</NavLink></Nav> : ""
          }
          
          <Nav>
            <NavDropdown  title="settings" >
                { token ?
                  <NavDropdown.Item style={{textAlign:'center'}}><NavLink to='/login' className='nav-link' onClick={() => handleLogout()} >Logout</NavLink></NavDropdown.Item>
                  :<NavDropdown.Item style={{textAlign:'center'}}><NavLink to='/login' className='nav-link'>Login</NavLink></NavDropdown.Item>
                }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <ToastContainer/>
    </Navbar>
  );
}

export default Header;