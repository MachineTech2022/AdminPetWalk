import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoPet from '../assets/img/LogoPet.png';
import './TitleHeader.scss'; 

export default function TitleHeader(){

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <Navbar className='title'  expand="lg">
        <Nav.Link  href="/DashboardGeneral">
          <img 
              className="logo" 
              src={LogoPet}
              alt="LogoPet"
              href="/DashboardGeneral"
          />
        </Nav.Link>
      
      <Container className='mg-0'>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse className='bg-letras ' id="basic-navbar-nav">
          <Nav className="">
            <NavDropdown title="Paseador" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ListRequest">Solicitudes paseadores</NavDropdown.Item>
              <NavDropdown.Item href="/ListWorkers">Listar paseadores</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Planes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ModifyDeactivatePlans">Listar Planes</NavDropdown.Item>
              <NavDropdown.Item href="/DiscountPlans">Descuentos Planes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Consumidor" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ListConsumers">Listar consumidor</NavDropdown.Item>
              <NavDropdown.Item href="/ReportUser">Reporte usuario</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='bg-letras justify-content-end' id="basic-navbar-nav ">
          <Nav className="">
            <Nav.Link className='justify-content-end volver nav-botones hover' href="javascript:history.back() ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
            </Nav.Link>
            <Nav.Link href="/DashboardGeneral"className='justify-content-end volver nav-botones hover'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
              </svg>
            </Nav.Link>
            <Nav.Link onClick={refreshPage} className='justify-content-end volver nav-botones hover'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
              </svg>
            </Nav.Link>
            <Nav.Link href=".."className='justify-content-end volver nav-botones hover'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='pd' viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
