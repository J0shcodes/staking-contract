import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Card} from 'react-bootstrap'

function App() {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">MT Stakeout</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <main className="container">
      <div className='row mt-5 bg-secondary py-5 ps-5'>
        <div className='staked-token col-xl-6'>
          <Card style={{ width: '18rem' }} className="text-center">
            <Card.Body>
              <Card.Title>Staked Token</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <Card.Text>
                0 MT
              </Card.Text>
              {/* <Card.Link href="#">Card Link</Card.Link> */}
              <Card.Link href="#">View More</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className='token-balance col-xl-6'>
          <Card style={{ width: '18rem' }} className="text-center">
            <Card.Body>
              <Card.Title>Token Balance</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <Card.Text>
                0 MT
              </Card.Text>
              {/* <Card.Link href="#">Card Link</Card.Link> */}
              <Card.Link href="#">View More</Card.Link>
            </Card.Body>
          </Card>
        </div>        
      </div>
      <div className='token-balance mt-4 text-center'>
        <button className='btn btn-primary me-2'>Stake a Token</button>
        <button className='btn btn-warning ms-2'>Transfer Token</button>
      </div>
    </main>
    </>
  );
}

export default App;
