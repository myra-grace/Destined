import { Link } from 'react-router-dom';
import '../styles/components/main-nav.scss';

export function MainNav() {
    return (
        <nav className="main-nav__wrapper">
            <ul className="main-nav__ul container">
                <li className="main-nav__item">
                    <Link to="/music" className='link link--hover-underline type--subtitle' data-title='Music'>Music</Link>
                </li>
                <li className="main-nav__item">
                    <Link to="/" className='link link--hover-underline type--accent'>Destined</Link>
                </li>
                <li className="main-nav__item">
                    <Link to="/sessions" className='link link--hover-underline type--subtitle' data-title='Sessions'>Sessions</Link>
                </li>
            </ul>
        </nav>
    )
}