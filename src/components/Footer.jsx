import { Link } from 'react-router-dom';
import '../styles/components/footer.scss';

export function Footer() {
    return (
        <div className="footer__wrapper">
            <div className="footer__inner">
                <div className="footer__title">
                    <Link to="/" className='link link--hover-underline type--accent'>Destined</Link>
                </div>
                <nav className="footer__nav">
                    <ul className="footer__ul">
                        <li className="footer__item">
                            <Link to="/landing" className='link link--hover-underline type--subtitle' data-title='Landing'>Landing</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="/facilitators" className='link link--hover-underline type--subtitle' data-title='Facilitators'>Facilitators</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="/sessions" className='link link--hover-underline type--subtitle' data-title='Sessions'>Sessions</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="/music" className='link link--hover-underline type--subtitle' data-title='Music'>Music</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="footer__bottom"><span>Montreal Filipino Seventh-Day Adventist Church</span></div>
        </div>
    )
}