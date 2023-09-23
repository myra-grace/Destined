import '../styles/pages/landing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import poster from '../assets/yr-poster-2023.png';

export function Landing() {
    return (
        <>
            <div className="landing__top color-profile-primary"><span>Kick-off @ MFSDAC 6pm, Friday Oct. 6</span></div>

            <div className='landing__hero container standard-padding'>
                <h1 className='landing__hero-title'>
                    <span className='landing__hero-title-pre type--pretitle'>You've been invited to</span>
                    <span className='landing__hero-title-post'>Destined 2023</span>
                </h1>

                <div className='landing__hero-details'>
                    <div><FontAwesomeIcon icon={faCalendar} /><span className='type--subtitle'>October 6-9</span></div>
                    <div><FontAwesomeIcon icon={faLocationDot} /><span className='type--subtitle'>Labelle, QC</span></div>
                </div>
            </div>

            <div className='landing__hero verse container standard-padding'>
                <div className='landing__hero-verse'>
                    <p>"The LORD will work out his plans for my life— for your faithful love, O LORD, endures forever. Don't abandon me, for you made me."
                        <span>— Psalms 138:8 NLT</span>
                    </p>
                </div>

                <div className='landing__hero-content hide'>
                    <p>Themed "Destined," this youth retreat is aimed to help you discover your destiny. From a Christ centered approach, we'll discuss topics of: life direction, character building, and practical living. Participate in engaging lectures, sermonettes, and workshops. Also, enjoy physical and hands-on activities such as: hiking, cooking, and wellness pursuits.</p>
                </div>
            </div>

            <div className='landing__poster container standard-margin-top'>
                <img src={ poster } alt="Event poster" />
            </div>

            <div className='landing__kick-off container standard-padding'>
                <h2 className='landing__kick-off-title standard-padding top-divider'>
                    <span className='type--pretitle'>Join us at the</span>Kick-off
                </h2>
                <h3>Date and time</h3>
                <p>Friday October 6 at 6pm</p>
                <h3 className='standard-margin-top'>Location</h3>
                <p>Montreal Filipino SDA church: 590 Fortune St, Montreal, Quebec H3K 2R6</p>

                <div className='standard-margin-top'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.615676628408!2d-73.5607298233466!3d45.47754533254754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a824ebe5b1d%3A0x91bd29b6942cf9fb!2s590%20Fortune%20St%2C%20Montreal%2C%20QC%20H3K%201Y1!5e0!3m2!1sen!2sca!4v1695006068100!5m2!1sen!2sca" 
                        width="600" 
                        height="450" 
                        style={{ border:"0" }}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div className='landing__checklist container standard-padding'>
                <h2 className='landing__checklist-title standard-padding top-divider'>Please bring</h2>

                <ul>
                    <li>Cloths (for 3 days & 3 nights)</li>
                    <li>Gym-wear (indoor)</li>
                    <li>Hiking attire (outdoor)</li>
                    <li>Towel</li>
                    <li>Sleeping bag</li>
                    <li>Pillow</li>
                    <li>Toiletries</li>
                </ul>
            </div>

            <div className="footer__bottom color-profile-primary"><span>Montreal Filipino Seventh-Day Adventist Church</span></div>
        </>
    );
}