import { Link } from 'react-router-dom';
import arches from '../../images/arches.jpg';
import { Row, Col, Container, Accordion, Button } from 'react-bootstrap';

const Home = () => (
  <>
    <img src={arches} height='50%' width='100%' alt='arches header' />
      <h1>Home Page</h1>
  </>
)

export default Home;