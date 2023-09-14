import { Link } from 'react-router-dom';
import '../styles/components/footer.scss';

export function Footer() {
    return (
        <nav className="footer__wrapper">
            <ul className="footer__ul container">
                <li className="footer__item">
                    <Link to="/admin" className='link link--hover-underline'>Admin</Link>
                </li>
                <li className="footer__item">
                    <Link to="/" className='link link--hover-underline type--accent'>Destined</Link>
                </li>
                <li className="footer__item">
                    <Link to="/details" className='link link--hover-underline'>Details</Link>
                </li>
            </ul>
        </nav>
    )
}