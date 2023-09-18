import { Link, useLocation } from 'react-router-dom';
import '../styles/components/header.scss';

export function Header() {
    const location = useLocation();
    const hideHeaderForPaths = ['/landing'];

    if(hideHeaderForPaths.includes(location.pathname)) {
        return <></>;
    }

    return (
        <nav className="header__wrapper">
            <ul className="header__ul container">
                <li className="header__item">
                    <Link to="/music" className='link link--hover-underline type--subtitle' data-title='Music'>Music</Link>
                </li>
                <li className="header__item">
                    <Link to="/" className='link link--hover-underline type--accent'>Destined</Link>
                </li>
                <li className="header__item">
                    <Link to="/sessions" className='link link--hover-underline type--subtitle' data-title='Sessions'>Sessions</Link>
                </li>
            </ul>
        </nav>
    )
}