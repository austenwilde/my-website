import { Link } from 'react-router-dom';
import { Row, Container, Button, Col} from "react-bootstrap";

// const MainFooter = () => (  
//   position:fixed;
//   bottom:0;
//   left:0;
// ) 



const Footer = () => {
  return(    
        <>
          {/* <MainFooter> */}
          <Row>
            <Col>
            <p>
              &copy;{new Date().getFullYear()} Powered by Austen Wilde 
            </p>
            </Col>
            <Col>
            <p>Your Website Could Look Like This!</p>
            </Col>
            <Col>
            <Link to='/messages'>
            
            <Button variant="outline-dark">Contact Me</Button>
              </Link>
            </Col>
          </Row>
          {/* </MainFooter> */}
        </>
  )
}

export default Footer