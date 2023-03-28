import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo"><Link className='link nav_link' to="/">MyNotes</Link></div>       
    </div>
  )
}

export default Navbar