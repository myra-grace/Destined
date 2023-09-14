import { Link } from 'react-router-dom';
import '../styles/components/main-nav.scss';

export function MainNav() {
    return (
        <nav className="main-nav__wrapper">
            <ul className="main-nav__ul container">
                <li className="main-nav__item">
                    <Link to="/admin" className='link link--hover-underline type--subtitle' data-title='Admin'>Admin</Link>
                </li>
                <li className="main-nav__item">
                    <Link to="/" className='link link--hover-underline type--accent'>Destined</Link>
                </li>
                <li className="main-nav__item">
                    <Link to="/details" className='link link--hover-underline type--subtitle' data-title='Details'>Details</Link>
                </li>
            </ul>
        </nav>
    )
}