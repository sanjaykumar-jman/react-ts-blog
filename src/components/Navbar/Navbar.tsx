import './Navbar.scss'
import { Link } from 'react-router-dom';

export default function Navbar() {
return<>
    <nav className='navbar'>
        <img src="src/assets/blog.png" alt="???" />
        <ul>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/explore" className="nav-link">Explore</Link></li>
            <li><Link to="/upload-blog" className="nav-link">Upload Blog</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
        </ul>
    </nav>
</>
}