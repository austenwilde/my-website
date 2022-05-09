import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <nav>
    <ul>
      <Link to='/'>
        <li></li>
      </Link>
      <Link to='/messages'>
        <li>Contact Me</li>
      </Link>
    </ul>
  </nav>
)

export default MainNavbar;