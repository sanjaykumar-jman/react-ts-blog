import './Navbar.scss'
import { Link } from 'react-router-dom';

export default function Navbar() {
return<>
    <nav className='navbar'>
        <img src="src/assets/blog.png" alt="???" />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/upload-blog">Upload Blog</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
</>
}